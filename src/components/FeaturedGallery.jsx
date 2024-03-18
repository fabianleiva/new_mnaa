import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { Link } from "react-router-dom";

const FeaturedGallery = () => {
  const { projects } = useContext(ApiContext);
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredImage(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const renderProjects = (projectId) => {
    const index = projects.findIndex((e) => e.acf.project_id === projectId);
    if (index !== -1) {
      const project = projects[index];
      const imageClass = projectId === "69" ? "min-w-full ml-[-2.5rem] mb-6" : "";
      const isHovered = hoveredImage === projectId;

      return (
        <div
          key={project.id}
          className="min-w-full flex justify-center h-fit relative text-xl mnaaBold"
          onMouseEnter={() => handleMouseEnter(projectId)}
          onMouseLeave={handleMouseLeave}
        >
          <Link className="flex bg-[#fafafa]" to={`/projects/${project.slug}`}>
            <div
              className={`projectName absolute z-[-10]`}
              style={{ top: isHovered ? "-1.5rem " : 0 }}
            >
              <span className="text-sm">{project.acf.project_title}</span>
            </div>
            <img
              className={`${imageClass} featuredImage min-w-full z-0`}
              src={project.acf.cover}
              alt={project.slug}
            />
          </Link>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="flex flex-col mx-6">
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-5 mb-5 md:mb-40">
        {renderProjects("54")}
        {renderProjects("71")}
        {renderProjects("72")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_2fr] gap-5 mb-5 md:mb-40">
        {renderProjects("70")}
        {renderProjects("74")}
        {renderProjects("75")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_2fr] gap-5 mb-5 md:mb-40">
        {renderProjects("47")}
        {renderProjects("61")}
        {renderProjects("79")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-5 mb-5 md:mb-40">
        {renderProjects("73")}
        {renderProjects("78")}
        {renderProjects("57")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_2fr] gap-5 mb-5 md:mb-40">
        {renderProjects("69")}
        {renderProjects("67")}
        {renderProjects("62")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_1fr] gap-5 mb-5 md:mb-40">
        {renderProjects("77")}
        {renderProjects("64")}
        {renderProjects("65")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-5 mb-5 md:mb-40">
        {renderProjects("50")}
        {renderProjects("49")}
        {renderProjects("41")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_1fr] gap-5 mb-5 md:mb-40">
        {renderProjects("60")}
        {renderProjects("53")}
        {renderProjects("51")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[3fr_2fr] gap-5 mb-5 md:mb-40">
        {renderProjects("39")}
        {renderProjects("45")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr] gap-5 mb-5 md:mb-40">
        {renderProjects("13")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[3fr_2fr] gap-5 mb-5 md:mb-40">
        {renderProjects("18")}
        {renderProjects("21")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_1fr_1fr] gap-5 mb-5 md:mb-40">
        {renderProjects("14")}
        <img className="block" src="" alt="" />
        {renderProjects("15")}
        {renderProjects("10")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_1fr_2fr_1fr] gap-5 mb-5 md:mb-40">
        <img className="block" src="" alt="" />
        {renderProjects("08")}
        {renderProjects("06")}
        <img className="block" src="" alt="" />
      </div>
    </section>
  );
};

export default FeaturedGallery;
