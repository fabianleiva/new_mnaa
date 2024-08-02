import AllProjectsList from "../components/AllProjectsList.jsx";

const AllProjects = () => {
  return (
    <>
      <main className="mt-[94vh]">
        <div className="grid grid-cols-7 fixed bottom-14 w-full px-6 font-[supreme-light] text-sm text-[#bebebe]">
          <p className="text-left col-span-2">Lugar</p>
          <p className="text-left">Superficie</p>
          <p className="text-left">Categoria</p>
          <p className="text-left">Year</p>
          <p className="text-right col-span-2">Proyecto</p>
        </div>
        <AllProjectsList />
      </main>
    </>
  );
};
export default AllProjects;
