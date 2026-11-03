import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { Link } from "react-router-dom";
import { responsiveImage } from "../utils/responsiveImage";
import FadeImage from "./FadeImage";
import { useBootContentReady } from "../context/bootSignal";

// Cada fila: clase de grilla (completa, para que Tailwind la detecte) e ids por columna (null = hueco).
const rows = [
  { grid: "grid-cols-[2fr_1fr_2fr]", ids: ["54", "78", "72"] },
  { grid: "grid-cols-[1fr_2fr_2fr]", ids: ["70", "74", "75"] },
  { grid: "grid-cols-[2fr_2fr_2fr]", ids: ["47", "61", "79"] },
  { grid: "grid-cols-[2fr_1fr_2fr]", ids: ["73", "71", "57"] },
  { grid: "grid-cols-[1fr_2fr_2fr]", ids: ["69", "67", "62"] },
  { grid: "grid-cols-[2fr_2fr_1fr]", ids: ["77", "64", "65"] },
  { grid: "grid-cols-[2fr_1fr_2fr]", ids: ["50", "49", "41"] },
  { grid: "grid-cols-[2fr_2fr_1fr]", ids: ["60", "53", "51"] },
  { grid: "grid-cols-[3fr_2fr]", ids: ["39", "45"] },
  { grid: "grid-cols-[1fr]", ids: ["13"] },
  { grid: "grid-cols-[3fr_2fr]", ids: ["18", "21"] },
  { grid: "grid-cols-[2fr_1fr_1fr_1fr]", ids: ["14", null, "15", "10"] },
  { grid: "grid-cols-[1fr_1fr_2fr_1fr]", ids: [null, "08", "06", null] },
];

// Ancho de columna (en vw) a partir de la clase de grilla, para que el navegador
// elija la variante de imagen más pequeña que se siga viendo nítida.
const columnShare = (grid) => {
  const frs = grid.match(/\d+(?=fr)/g).map(Number);
  const total = frs.reduce((a, b) => a + b, 0);
  return frs.map((fr) => Math.round((fr / total) * 100));
};

// Cómo aparece la grilla (sin depender del scroll):
//  1. La primera fila se descarga sola, y se muestra cuando todas sus fotos están listas.
//  2. Después el resto se descarga en segundo plano, LOOKAHEAD filas por delante de las listas.
//  3. Las filas se revelan en orden, de arriba hacia abajo, apenas están listas. Al llegar a
//     una fila con el scroll, ya está pintada y quieta: no ocurre nada al pasar.
// Si una fila tarda más de lo razonable, se revela igual (primera fila FIRST_TIMEOUT, resto ROW_TIMEOUT).
const LOOKAHEAD = 3;
const FIRST_TIMEOUT = 5000;
const ROW_TIMEOUT = 3000;

// Mientras la página se desplaza, el navegador dispara "hover" en cada foto que pasa bajo el cursor.
// Se ignora ese hover para que los títulos no se muevan solos al hacer scroll.
let scrollingUntil = 0;
const isScrolling = () => performance.now() < scrollingUntil;

// Foto de un proyecto. El estado de hover es local: pasar el mouse por una foto no redibuja la grilla.
const ProjectCell = ({ project, share, eager, reveal, onReady }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageClass =
    project.acf.project_id === "69" ? "min-w-full ml-[-2.5rem] mb-6" : "";

  return (
    <div
      className="flex justify-center h-fit relative"
      onMouseEnter={() => !isScrolling() && setIsHovered(true)}
      onMouseMove={() => !isHovered && !isScrolling() && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        className="flex bg-[#fafafa] text-[#fafafa] hover:text-[#242424]"
        to={`/projects/selected/${project.slug}`}
      >
        <div
          className={`transition-all duration-300 ease-in-out absolute z-[-10] top`}
          style={{ top: isHovered ? "-1.7rem " : 0 }}
        >
          <span className="hidden md:block">{project.acf.project_title}</span>
        </div>
        <FadeImage
          className={`${imageClass} w-full h-auto z-0 `}
          duration={1200}
          {...responsiveImage(
            project.acf.cover,
            `(min-width: 768px) ${share}vw, 100vw`
          )}
          alt={project.slug}
          loading={eager ? "eager" : "lazy"}
          reveal={reveal}
          onReady={onReady}
          decoding="async"
        />
      </Link>
    </div>
  );
};

const FeaturedGallery = () => {
  const { projects } = useContext(ApiContext);

  // Marca cuándo la página se está desplazando (ver ProjectCell)
  useEffect(() => {
    const onScroll = () => {
      scrollingUntil = performance.now() + 200;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasProject = (id) =>
    id && projects.some((p) => p.acf.project_id === id);
  const counts = rows.map((r) => r.ids.filter(hasProject).length);
  const hasProjects = projects.length > 0;

  // Fotos listas por fila
  const readyByRow = useRef(rows.map(() => new Set()));
  const [, setTick] = useState(0);
  const onImageReady = useCallback((rowIndex, id) => {
    if (!readyByRow.current[rowIndex].has(id)) {
      readyByRow.current[rowIndex].add(id);
      setTick((t) => t + 1);
    }
  }, []);

  // Filas listas de forma consecutiva desde la primera
  let consecutive = 0;
  while (
    consecutive < rows.length &&
    (counts[consecutive] === 0 ||
      readyByRow.current[consecutive].size >= counts[consecutive])
  ) {
    consecutive += 1;
  }
  const allEmpty = counts.every((c) => c === 0);

  // Si una fila tarda demasiado, se avanza igual para no dejar la página vacía
  const [forced, setForced] = useState(0);
  const revealed = hasProjects && !allEmpty ? Math.max(consecutive, forced) : 0;
  useEffect(() => {
    if (!hasProjects || revealed >= rows.length) return;
    const timer = setTimeout(
      () => setForced(revealed + 1),
      revealed === 0 ? FIRST_TIMEOUT : ROW_TIMEOUT
    );
    return () => clearTimeout(timer);
  }, [hasProjects, revealed]);

  // la primera fila ya está lista: el loader de entrada puede retirarse
  useBootContentReady(revealed >= 1);

  const renderProjects = (projectId, rowIndex, share) => {
    const project = projects.find((e) => e.acf.project_id === projectId);
    if (!project) return null;
    // la primera fila carga sola; el resto, en segundo plano una vez lista la primera
    const eager =
      rowIndex === 0 || (consecutive >= 1 && rowIndex < consecutive + LOOKAHEAD);
    return (
      <ProjectCell
        key={project.id}
        project={project}
        share={share}
        eager={eager}
        reveal={rowIndex < revealed}
        onReady={() => onImageReady(rowIndex, projectId)}
      />
    );
  };

  return (
    <section className="flex flex-col tracking-wider">
      {rows.map(({ grid, ids }, rowIndex) => {
        const shares = columnShare(grid);
        return (
          <div
            key={rowIndex}
            className={`flex flex-col md:grid ${grid} gap-3 mb-3 md:mb-20 2xl:mb-40`}
          >
            {ids.map((id, col) =>
              id ? (
                renderProjects(id, rowIndex, shares[col])
              ) : (
                <div key={`gap-${col}`}></div>
              )
            )}
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedGallery;
