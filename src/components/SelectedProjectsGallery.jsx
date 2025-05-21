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
      const imageClass =
        projectId === "69" ? "min-w-full ml-[-2.5rem] mb-6" : "";
      const isHovered = hoveredImage === projectId;

      return (
        <div
          key={project.id}
          className="flex justify-center h-fit relative"
          onMouseEnter={() => handleMouseEnter(projectId)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            className="flex bg-[#fafafa] text-[#fafafa] hover:text-[#242424]"
            to={`/projects/selected/${project.slug}`}
          >
            <div
              className={`transition-all duration-300 ease-in-out absolute z-[-10] top`}
              style={{ top: isHovered ? "-1.7rem " : 0 }}
            >
              <span className="hidden md:block">
                {project.acf.project_title}
              </span>
            </div>
            <img
              className={`${imageClass} w-full h-auto z-0 `}
              src={project.acf.cover}
              alt={project.slug}
              loading="lazy"
            />
          </Link>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="flex flex-col tracking-wider">
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("54")}
        {renderProjects("78")}
        {renderProjects("72")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("70")}
        {renderProjects("74")}
        {renderProjects("75")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("47")}
        {renderProjects("61")}
        {renderProjects("79")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("73")}
        {renderProjects("71")}
        {renderProjects("57")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_2fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("69")}
        {renderProjects("67")}
        {renderProjects("62")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("77")}
        {renderProjects("64")}
        {renderProjects("65")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("50")}
        {renderProjects("49")}
        {renderProjects("41")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("60")}
        {renderProjects("53")}
        {renderProjects("51")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[3fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("39")}
        {renderProjects("45")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("13")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[3fr_2fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("18")}
        {renderProjects("21")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        {renderProjects("14")}
        <div></div>
        {renderProjects("15")}
        {renderProjects("10")}
      </div>
      <div className="flex flex-col md:grid grid-cols-[1fr_1fr_2fr_1fr] gap-3 mb-3 md:mb-20 2xl:mb-40">
        <div></div>
        {renderProjects("08")}
        {renderProjects("06")}
        <div></div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
