import React from "react";
import bingeIt from "../assets/portfolio/binge-it.jpg";
import weather from "../assets/portfolio/myWeather.jpg";
import shopIt from "../assets/portfolio/shop-it.jpg";
import codeIt from "../assets/portfolio/code-it.jpg";
import auth from "../assets/portfolio/auth.jpg";
import calculator from "../assets/portfolio/calculator.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bingeIt,
      code:"https://github.com/Shrikant2603/binge-it",
      live:"https://binge-it.netlify.app/",
    },
    {
      id: 2,
      src: weather,
      code:"https://github.com/Shrikant2603/myWeather",
      live:"https://shrikant2603.github.io/myWeather/",
    },
    {
      id: 3,
      src: shopIt,
      code:"https://github.com/Shrikant2603/module-4-test",
      live:"https://module-4-test.netlify.app/",
    },
    {
      id: 4,
      src: codeIt,
      code:"https://github.com/Shrikant2603/code-it",
      live:"https://code-it-editor.netlify.app/",
    },
    {
      id: 5,
      src: auth,
      code:"https://github.com/Shrikant2603/code-it",
      live:"https://jan-contest-3.netlify.app/",      
    },
    {
      id: 6,
      src: calculator,
      code:"https://github.com/Shrikant2603/Calculator",
      live:"https://shrikant2603.github.io/Calculator/",      
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,code,live }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(code, "_blank")}>
                  Code
                </button>
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(live, "_blank")}>
                  Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;