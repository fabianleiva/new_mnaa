import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const AllProjectsList = () => {
  const { projects } = useContext(ApiContext);

  return (
    <section className="border border-solid relative mx-6 font-[supreme-regular] overflow-y-auto scroll-snap-type-y-mandatory">
      {projects.map((p) => (
        <div key={p.id} className="grid grid-cols-7 justify-between mb-6 scroll-snap-start">
          <p className="text-left col-span-2">{p.acf.location}</p>
          <p className="text-left">{p.acf.surface}</p>
          <p className="text-left">{p.acf.category.name}</p>
          <p className="text-left">{p.acf.year}</p>
          <p className="text-right col-span-2">{p.acf.project_title}</p>
        </div>
      ))}
    </section>
  );
};

export default AllProjectsList;
