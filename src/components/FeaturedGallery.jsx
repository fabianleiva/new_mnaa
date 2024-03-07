import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { Link } from "react-router-dom";

const FeaturedGallery = () => {
  const { projects } = useContext(ApiContext);

  const renderProjects = (projectId) => {
    const index = projects.findIndex((e) => e.acf.project_id === projectId);
    if (index !== -1) {
      const project = projects[index];
      const imageClass =
        projectId === "69" ? "featuredImage imageOnEdge" : "featuredImage";
      return (
        <div key={project.id} className="featuredImageContainer">
          <Link to={`/projects/${project.slug}`}>
            <img
              className={imageClass}
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
    <section className="animate__animated animate__fadeInUp flex flex-col mx-8">
      <div className="grid grid-cols-[2fr_1fr_2fr] gap-8 mb-40 mobileGrid">
        {renderProjects("54")}
        {renderProjects("71")}
        {renderProjects("72")}
      </div>
      <div className="grid grid-cols-[1fr_2fr_2fr] gap-8 mb-40 mobileGrid">
        {renderProjects("70")}
        {renderProjects("74")}
        {renderProjects("75")}
      </div>
      <div className="grid grid-cols-[2fr_2fr_2fr] gap-8 mb-40 mobileGrid">
        {renderProjects("47")}
        {renderProjects("61")}
        {renderProjects("79")}
      </div>
      <div className="grid grid-cols-[2fr_1fr_2fr] gap-8 mb-40 mobileGrid">
        {renderProjects("73")}
        {renderProjects("78")}
        {renderProjects("57")}
      </div>
      <div className="grid grid-cols-[1fr_2fr_2fr] gap-8 mb-40 mobileGrid">
        {renderProjects("69")}
        {renderProjects("77")}
        {renderProjects("62")}
      </div>
      <div className="grid grid-cols-[2fr_2fr_1fr] gap-8 mb-40 mobileGrid">
        {renderProjects("67")}
        {renderProjects("64")}
        {renderProjects("65")}
      </div>
      <div className="grid grid-cols-[2fr_1fr_2fr] gap-8 mb-40 mobileGrid">
        {renderProjects("50")}
        {renderProjects("49")}
        {renderProjects("41")}
      </div>
      <div className="grid grid-cols-[2fr_2fr_1fr] gap-8 mb-40 mobileGrid">
        {renderProjects("60")}
        {renderProjects("53")}
        {renderProjects("51")}
      </div>
      <div className="grid grid-cols-[3fr_2fr] gap-8 mb-40 mobileGrid">
        {renderProjects("39")}
        {renderProjects("45")}
      </div>
      <div className="grid grid-cols-[1fr] gap-8 mb-40 mobileGrid">
        {renderProjects("13")}
      </div>
      <div className="grid grid-cols-[3fr_2fr] gap-8 mb-40 mobileGrid">
        {renderProjects("18")}
        {renderProjects("21")}
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-40 mobileGrid">
        {renderProjects("14")}
        <img className="emptyImg" src="" alt="" />
        {renderProjects("15")}
        {renderProjects("10")}
      </div>
      <div className="grid grid-cols-[1fr_1fr_2fr_1fr] gap-8 mb-40 mobileGrid">
        <img className="emptyImg" src="" alt="" />
        {renderProjects("08")}
        {renderProjects("06")}
        <img className="emptyImg" src="" alt="" />
      </div>
    </section>
  );
};

export default FeaturedGallery;
