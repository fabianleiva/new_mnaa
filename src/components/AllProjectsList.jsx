import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";

const AllProjectsList = () => {
  const { projects } = useContext(ApiContext);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [openProjects, setOpenProjects] = useState([]);
  const [animatingProjects, setAnimatingProjects] = useState({});

  const handleProjectClick = (projectId) => {
    if (openProjects.includes(projectId)) {
      // Si el proyecto ya está abierto, inicia la animación de cierre
      setAnimatingProjects((prev) => ({
        ...prev,
        [projectId]: "collapse-enter",
      }));
      setTimeout(() => {
        setOpenProjects(openProjects.filter((id) => id !== projectId));
        setAnimatingProjects((prev) => {
          // eslint-disable-next-line no-unused-vars
          const { [projectId]: _, ...rest } = prev;
          return rest;
        });
      }, 1000); // Duración de la animación de cierre
    } else {
      // Si el proyecto no está abierto, simplemente ábrelo
      setOpenProjects([...openProjects, projectId]);
      setAnimatingProjects((prev) => ({
        ...prev,
        [projectId]: "expand-enter",
      }));
    }
  };

  return (
    <section className="mx-6 mt-12">
      <div className="mb-32">
        <div className="h-4 lg:h-6"></div>
        {projects.map((p) => (
          <div
            onMouseEnter={() => setHoveredProjectId(p.id)}
            onClick={() => handleProjectClick(p.id)}
            key={p.id}
            className={`${
              hoveredProjectId === p.id
                ? "grid grid-cols-9 justify-between text-xs lg:text-sm font-[supreme-bold] text-[#262523] uppercase tracking-wider"
                : "grid grid-cols-9 justify-between text-xs lg:text-sm font-[supreme-light] text-[#999999] uppercase tracking-wider"
            }`}
          >
            <p className="text-left col-span-8 md:col-span-3 py-1">
              {p.acf.project_title}
            </p>
            <p className="text-left hidden md:block col-span-3 py-1">
              {p.acf.location}
            </p>
            <p className="text-left hidden md:block py-1">{p.acf.surface}</p>
            <p className="text-left hidden md:block py-1">
              {p.acf.category.name}
            </p>
            <p className="text-right py-1">{p.acf.year}</p>
            <div
              className={`col-span-9 flex justify-end overflow-hidden ${
                animatingProjects[p.id] || ""
              }`}
            >
              {openProjects.includes(p.id) && (
                <div className="flex flex-col md:flex-row justify-between w-full font-[supreme-light]">
                  <div className="flex flex-col text-left py-6 h-[120rem] min-w-[30vw] md:max-w-[30vw] mr-6">
                    <p>Arquitectos: {p.acf.architects}</p>
                    <p>Colaboradores: {p.acf.colaborators}</p>
                    <p>Ubicación: {p.acf.location}</p>
                    <p>Año: {p.acf.year}</p>
                    <p>Superficie: {p.acf.surface}</p>
                  </div>
                  <div className="flex justify-end">
                    <img
                      src={p.acf.cover}
                      alt={p.acf.project_title}
                      className="py-6 max-w-fit max-h-[30vh] md:max-h-[50vh]"
                    />
                  </div>
                </div>
              )}
            </div>
            <hr className="col-span-9 h-[1px] bg-[#262523] border-0 rounded dark:bg-[#262523]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjectsList;
