import { useParams } from "react-router";
import { useState, useEffect, useContext, useRef } from "react";
import { ApiContext } from "../context/ApiContext.jsx";

const ProjectGallery = () => {
  const [project, setProject] = useState();
  const { projects } = useContext(ApiContext);
  const { projectSlug } = useParams();
  const galleryRef = useRef(null);

  useEffect(() => {
    // Buscar el proyecto correspondiente al slug
    const foundProject = projects.find((e) => e.slug === projectSlug);
    // Actualizar el estado con el proyecto encontrado
    if (foundProject) {
      setProject(foundProject);
    }
  }, [projects, projectSlug]);

  // Manejar el evento de la rueda del ratón
  const handleWheelScroll = (e) => {
    const container = galleryRef.current;
    if (!container) return;

    // Detectar la dirección del scroll
    const direction = Math.sign(e.deltaY);

    // Ajustar el scroll horizontal
    container.scrollLeft += direction * 100; // Ajusta la velocidad del scroll según lo necesites
  };

  return (
    <main className="mt-[25vh] animate__animated animate__fadeInUp">
      <section>
        <div
          className="md:overflow-x-scroll md:no-scrollbar"
          ref={galleryRef}
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <div
            className="max-w-[100vw] text-wrap md:flex"
            onWheel={handleWheelScroll}
          >
            {project && (
              <>
                <div className="px-6 text-left md:pr-[10rem] mb-6">
                  <p className="text-lg md:text-xl uppercase font-[supreme-bold]">
                    {project.acf.project_title}
                  </p>
                  <p className="max-w-[100vw] md:w-[35rem] font-[supreme-light] text-sm md:text-base">
                    {project.acf.summary}
                  </p>
                </div>
                {/* Renderizar las imágenes adicionales */}
                {Object.keys(project.acf.project_images).map(
                  (key) =>
                    // Verificar si la imagen no es falsa
                    project.acf.project_images[key] && (
                      <img
                        key={key}
                        className="px-6 md:h-[72vh]  md:pr-[10rem] mb-6"
                        src={project.acf.project_images[key]}
                        alt={`Image ${key}`}
                      />
                    )
                )}
                <div className="flex flex-col justify-between font-[supreme-light] text-right uppercase text-xs md:text-base mt-48 md:mt-0 mb-6">
                  <div className="md:w-[35rem] pr-6">
                    <p>
                      Arquitectos: {project.acf.architects}
                    </p>
                    <p>
                      Colaboradores: {project.acf.colaborators}
                    </p>
                    <p>
                      Ubicación: {project.acf.location}
                    </p>
                    <p>Año: {project.acf.year}</p>
                    <p>
                      Superficie: {project.acf.surface}
                    </p>
                  </div>
                  {/* Botón para ir al inicio de la página */}
                  <button
                    onClick={() => {
                      const container = galleryRef.current;
                      if (container) {
                        container.scrollTo({ left: 0, behavior: "smooth" });
                      }
                    }}
                    className="pr-6 text-right uppercase hidden md:block"
                  >
                    {"<<"} Ir al inicio
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectGallery;
