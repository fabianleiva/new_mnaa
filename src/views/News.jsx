import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Footer from "../components/Footer";

const News = () => {
  const { news } = useContext(ApiContext);

  return (
    <main className="mt-[25vh] px-6">
      <div className="flex flex-col items-center">
        {news.map((item) => (
          <div key={item.id} className="flex flex-col mb-24 md:max-w-min">
            <div className="flex justify-between mb-2 w-full">
              <p className="uppercase text-sm lg:text-lg font-[supreme-bold]">
                {item.acf.title}
              </p>
              <p className="uppercase text-sm lg:text-lg text-[#bebebe] hidden md:block">
                {item.acf.category.name}
              </p>
            </div>
            <div className="relative flex flex-col justify-center max-w-80vw">
              <img
                src={item.acf.cover}
                alt={item.acf.title}
                className="max-h-[50rem] md:max-w-[80vw] lg:max-w-[60vw] object-contain"
              />
              <div className="absolute bottom-0 -right-[26rem] -rotate-90 origin-bottom-left w-96 hidden md:block">
                <p className="text-left text-2xl font-[supreme-light] text-[#bebebe]">
                  {item.acf.date}
                </p>
              </div>
              <div className="flex justify-between md:hidden mt-2">
                <p className="text-[#bebebe] font-[supreme-regular] text-sm">
                  {item.acf.category.name}
                </p>
                <p className="text-[#bebebe] font-[supreme-regular] text-sm">
                  {item.acf.date}
                </p>
              </div>
            </div>
            <p className="font-[supreme-light] text-left mt-2">
              {item.acf.summary}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default News;
