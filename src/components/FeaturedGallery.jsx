import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const FeaturedGallery = () => {
  const { projects } = useContext(ApiContext);

  return (
    <main className="content animate__animated animate__fadeInUp">
      <div className="featuredGallery">
        {projects?.map((e) => {
          if (e.acf.project_filter == "destacado") {
            return (
              <div key={e.id} className="imageContainer">
                <img
                  className="projectImage"
                  src={e.acf.cover}
                  alt={e.title.rendered}
                />
              </div>
            );
          }
        })}
      </div>
    </main>
  );
};

export default FeaturedGallery;
