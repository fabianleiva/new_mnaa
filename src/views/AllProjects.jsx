import AllProjectsList from "../components/AllProjectsList.jsx";

const AllProjects = () => {
  return (
    <>
      <main className="mt-[25vh]">
        <div className="fixed top-0 w-full bg-[#fafafa] h-[25vh] text-red-500 z-50"></div>
        <div className="fixed grid grid-cols-9 px-6 font-[supreme-bold] text-[#262523] uppercase w-full bg-[#fafafa] text-xs lg:text-sm z-50">
          <p className="text-left col-span-8 md:col-span-3">Proyecto</p>
          <p className="text-left col-span-3 hidden md:block">Lugar</p>
          <p className="text-left hidden md:block">Superficie</p>
          <p className="text-left hidden md:block">Tipologia</p>
          <p className="text-right">Año</p>
          <hr className="col-span-9 h-[1px] bg-[#262523] border-0 rounded dark:bg-[#262523] translate-y-[-1px]" />
        </div>
        <AllProjectsList />
      </main>
    </>
  );
};
export default AllProjects;
