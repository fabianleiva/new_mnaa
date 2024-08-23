
const Publications = () => {
  return (
    <main className="mt-[25vh] px-6">
      <article>
        {/* Recognitions */}
        <section className="mt-48">
          <div className="text-base uppercase font-[supreme-light]">
            {/* Publications */}
            <div className="text-left mt-24 col-span-2">
              <p className="col-span-2 font-['supreme-bold'] text-xl">
                Publicaciones
              </p>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700" />
              <div className="flex justify-between mt-2 align-between font-[supreme-light]">
                <p>ARQ / Max Nunez - Coleccion de Ideas</p>
                <p className="ml-6">2018</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
              <div className="flex justify-between mt-2 align-between font-[supreme-light]">
                <p>TRACE / Max Nunez Arquitectos - Pista de Despegue</p>
                <p className="ml-6">2015</p>
              </div>
              <hr className="col-span-6 w-full h-[1px] bg-[#262523] border-0 rounded dark:bg-gray-700 mt-2" />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Publications;
