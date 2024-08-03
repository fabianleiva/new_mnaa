import AllProjectsList from "../components/AllProjectsList.jsx";

const AllProjects = () => {

  return (
    <>
      <main className="mt-[25vh]">
        <div className="fixed top-0 w-full bg-[#fafafa] h-[25vh] text-red-500"></div>
        <div className="-translate-y-full fixed grid grid-cols-8 w-[50vw] mx-6 font-[EB-Garamond-Italic] text-sm text-[#bebebe]">
          <p className="text-left col-span-3">Proyecto</p>
          <p className="text-left col-span-2">Lugar</p>
          <p className="text-left">Superficie</p>
          <p className="text-left">Categoria</p>
          <p className="text-right">Year</p>
        </div>
        <hr className="fixed w-[50vw] ml-6 h-[1px] bg-[#bebebe] border-0 rounded dark:bg-[#bebebe] z-50	z-index: 50 ;" />
        <AllProjectsList />
      </main>
    </>
  );
};
export default AllProjects;
