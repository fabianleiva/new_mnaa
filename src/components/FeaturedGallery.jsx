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
        projectId === "69" ? "featuredProjectImage imgOnEdge" : "featuredProjectImage";
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
    <main className="content animate__animated animate__fadeInUp">
      <div className="featuredGallery_2_1_2 featuredGalleryMobile">
        {renderProjects("54")}
        {renderProjects("71")}
        {renderProjects("72")}
      </div>
      <div className="featuredGallery_1_2_2 featuredGalleryMobile">
        {renderProjects("70")}
        {renderProjects("74")}
        {renderProjects("75")}
      </div>
      <div className="featuredGallery_2_2_1 featuredGalleryMobile">
        {renderProjects("47")}
        {renderProjects("61")}
        {renderProjects("79")}
      </div>
      <div className="featuredGallery_2_1_2 featuredGalleryMobile">
        {renderProjects("73")}
        {renderProjects("78")}
        {renderProjects("57")}
      </div>
      <div className="featuredGallery_1_2_2 featuredGalleryMobile">
        {renderProjects("69")}
        {renderProjects("77")}
        {renderProjects("62")}
      </div>
      <div className="featuredGallery_2_2_1 featuredGalleryMobile">
        {renderProjects("67")}
        {renderProjects("64")}
        {renderProjects("65")}
      </div>
      <div className="featuredGallery_2_1_2 featuredGalleryMobile">
        {renderProjects("50")}
        {renderProjects("49")}
        {renderProjects("41")}
      </div>
      <div className="featuredGallery_2_2_1 featuredGalleryMobile">
        {renderProjects("60")}
        {renderProjects("53")}
        {renderProjects("51")}
      </div>
      <div className="featuredGallery_3_2 featuredGalleryMobile">
        {renderProjects("39")}
        {renderProjects("45")}
      </div>
      <div className="featuredGallery_1 featuredGalleryMobile">
        {renderProjects("13")}
      </div>
      <div className="featuredGallery_3_2 featuredGalleryMobile">
        {renderProjects("18")}
        {renderProjects("21")}
      </div>
      <div className="featuredGallery_2_1_1_1 featuredGalleryMobile">
        {renderProjects("14")}
        <img src="" alt="" />
        {renderProjects("15")}
        {renderProjects("10")}
      </div>
      <div className="featuredGallery_1_1_2_1 featuredGalleryMobile">
        <img src="" alt="" />
        {renderProjects("08")}
        {renderProjects("06")}
        <img src="" alt="" />
      </div>
    </main>
  );
};

export default FeaturedGallery;
