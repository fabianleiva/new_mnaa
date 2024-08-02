import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Footer from "../components/Footer";

const News = () => {
  const { news } = useContext(ApiContext);

  return (
    <main className="mt-[25vh] px-6">
      <div className="flex flex-col items-center">
        {news.map((item) => (
          <div key={item.id} className="flex flex-col mb-24 max-w-min">
            <div className="flex justify-between">
              <h5 className="uppercase text-[#bebebe]">
                {item.acf.category.name}
              </h5>
              <h5>{item.acf.title}</h5>
            </div>
            <div className="relative flex flex-col justify-center">
              <img
                src={item.acf.cover}
                alt={item.acf.title}
                className="max-h-[50rem] max-w-[70rem] w-auto object-contain"
              />
              <div className="absolute bottom-0 -right-[27rem] -rotate-90 origin-bottom-left w-96">
                <p className="uppercase text-left text-4xl font-[supreme-thin] text-[#bebebe]">
                  {item.acf.date}
                </p>
              </div>
            </div>
            <p className="font-[bookAntiquaItalic] text-left mt-2">
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
