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
    <main>
      <section className="content animate__animated animate__fadeInUp projectGallery">
        <div className="slider overflow-x-scroll no-scrollbar" ref={galleryRef} style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <div className="slider_inner" onWheel={handleWheelScroll}>
            {project && (
              <>
                {/* Renderizar las imágenes adicionales */}
                {Object.keys(project.acf.project_images).map((key) => (
                  <img
                    key={key}
                    className="projectImage"
                    src={project.acf.project_images[key]}
                    alt={`Image ${key}`}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectGallery;
