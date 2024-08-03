import { useContext, useState, useEffect } from "react";
import { ApiContext } from "../context/ApiContext";

const AllProjectsList = () => {
  const { projects } = useContext(ApiContext);
  const [projectImage, setProjectImage] = useState("");
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  useEffect(() => {
    if (projects.length > 0) {
      setProjectImage(projects[0].acf.cover);
    }
  }, [projects]);

  const getProjectInfo = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setProjectImage(project.acf.cover);
      setHoveredProjectId(projectId);
    }
  };

  return (
    <section className="w-[50vw] mx-6">
      <div className="fixed right-0">
        <img
          className="max-h-[65vh] max-w-[30vw] mr-6"
          src={projectImage}
          alt="project_image"
        />
      </div>
      <div className="mb-24 mt-6">
        <div
          className={`h-6 grid grid-cols-8 justify-between scroll-snap-start font-[EB-Garamond-Regular] text-[#bebebe] text-md`}
        ></div>

        {projects.map((p) => (
          <div
            onMouseEnter={() => getProjectInfo(p.id)}
            key={p.id}
            className={` ${
              hoveredProjectId === p.id
                ? "h-12 grid grid-cols-8 justify-between text-sm font-[supreme-bold] uppercase text-[#262523]"
                : "h-12 grid grid-cols-8 justify-between text-md font-[EB-Garamond-Regular] text-[#bebebe]"
            }`}
          >
            <p className="text-left col-span-3">{p.acf.project_title}</p>
            <p className="text-left col-span-2">{p.acf.location}</p>
            <p className="text-left">{p.acf.surface}</p>
            <p className="text-left">{p.acf.category.name}</p>
            <p className="text-right">{p.acf.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjectsList;
