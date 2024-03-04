import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const ProjectGallery = () => {
  const { projects } = useContext(ApiContext);

  return (
    <main className="content animate__animated animate__fadeInUp">
      <div className="projectGallery">
        {projects?.map((e) => {
          return (
            <div key={e.id} className="imageContainer">
              <img
                className="projectImage"
                src={e.acf.cover}
                alt={e.title.rendered}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ProjectGallery;
