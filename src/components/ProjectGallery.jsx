import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../context/ApiContext.jsx";

const ProjectGallery = () => {
  const [project, setProject] = useState();
  const { projects } = useContext(ApiContext);
  const { projectSlug } = useParams();

  useEffect(() => {
    // Buscar el proyecto correspondiente al slug
    const foundProject = projects.find((e) => e.slug === projectSlug);
    // Actualizar el estado con el proyecto encontrado
    if (foundProject) {
      setProject(foundProject);
    }
  }, [projects, projectSlug]);

  return (
    <main className="content animate__animated animate__fadeInUp">
      <div className="projectGallery overflow-visible ">
        {project && (
          <>
            {/* Renderizar las imágenes adicionales */}
            {Object.keys(project.acf.project_images).map((key) => (
              <img className="object-contain h-80"
                key={key}
                src={project.acf.project_images[key]}
                alt={`Image ${key}`}
              />
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default ProjectGallery;
