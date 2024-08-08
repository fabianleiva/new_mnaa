import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const Home = () => {
  const { projects } = useContext(ApiContext);

  const renderProjects = (projectId) => {
    const index = projects.findIndex((e) => e.acf.project_id === projectId);
    if (index !== -1) {
      const project = projects[index];
      const imageClass =
        projectId === "69" ? "min-w-full ml-[-2.5rem] mb-6" : "";

      return (
        <div
          className="bg-[#fafafa] min-w-max mx-6"
          to={`/projects/${project.slug}`}
        >
          <img
            className={`${imageClass} z-0 h-[72vh]`}
            src={project.acf.cover}
            alt={project.slug}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <main className=" w-max mt-[25vh] overflow-y-scroll no-scrollbar inline-flex flex-nowrap">
      {/* <img className="w-[7680px]" src="../../src/img/home_image_1.png" alt="home_image" /> */}
        <div className="flex flex-row animate-infinite-scroll">
          {renderProjects("72")}
          {renderProjects("18")}
          {renderProjects("41")}
          {renderProjects("47")}
          {renderProjects("39")}
          {renderProjects("48")}
          {renderProjects("55")}
          {renderProjects("62")}
        </div>
        <div className="flex flex-row animate-infinite-scroll">
          {renderProjects("72")}
          {renderProjects("18")}
          {renderProjects("41")}
          {renderProjects("47")}
          {renderProjects("39")}
          {renderProjects("48")}
          {renderProjects("55")}
          {renderProjects("62")}
        </div>
      </main>
    </>
  );
};
export default Home;
