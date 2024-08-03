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
    container.scrollLeft += direction * 150; // Ajusta la velocidad del scroll según lo necesites
  };

  return (
    <main className="mt-[25vh] animate__animated animate__fadeInUp">
      <section className="projecGallery">
        <div
          className="slider overflow-x-scroll no-scrollbar"
          ref={galleryRef}
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <div className="slider_inner flex" onWheel={handleWheelScroll}>
            {project && (
              <>
                <div className="projectTitleSummary pr-[10rem]">
                  <p className="w-[35rem] px-6 text-left text-xl mnaaBold">
                    {project.acf.project_title}
                  </p>
                  <p className="w-[35rem] px-6 text-left text-pretty font-[EB-Garamond-Regular]">
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
                        className="h-[72vh] min-w-fit pr-[10rem]"
                        src={project.acf.project_images[key]}
                        alt={`Image ${key}`}
                      />
                    )
                )}
                <div className="projectInfo flex flex-col justify-between">
                  <div className="font-[EB-Garamond-Regular]">
                    <p className="w-[35rem] pr-6 text-right">
                      Arquitectos: {project.acf.architects}
                    </p>
                    <p className="w-[35rem] pr-6 text-pretty text-right">
                      Colaboradores: {project.acf.colaborators}
                    </p>
                    <p className="w-[35rem] pr-6 text-pretty text-right">
                      Ubicación: {project.acf.location}
                    </p>
                    <p className="w-[35rem] pr-6 text-pretty text-right">
                      Año: {project.acf.year}
                    </p>
                    <p className="w-[35rem] pr-6 text-pretty text-right">
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
                    className="pr-6 text-right"
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
