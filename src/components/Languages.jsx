import React from "react";
import Argentina from "../assets/Argentina.png";
import English from "../assets/English.jpg";


const Languages = () => {
  const languages = [
    {
      id: 1,
      src: Argentina,
      title: "Español: Nativo (C2)",
    },
    {
      id: 2,
      src: English,
      title: "Ingles: Avanzado (B2)",
    },
  ];

  return (
    <div
      name="languages"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Languages
          </p>
          {/*<p className="py-6">Check out some of my work right here</p>*/}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {languages.map(({ id, src,title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                  <p className="mt-4">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
