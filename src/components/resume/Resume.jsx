import React from "react";

const Resume = () => {
  return (
    <div id="resumen" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-red-600 sm:text-2xl">
          Resumen
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[45%] mb-11">
        Soy una persona apacionada por la tecnología y el marketing digital con habilidades en desarrollo de software desde paginas estáticas hasta aplicaciones interactivas en diversas tecnologías del desarrollo de software. Actualmente estoy en 4to año ejerciendo la carrera de ingienería en informática y desarrollando mi comunicación efectiva y habilidades para resolver problemas que garantizan resultados de alta calidad.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-red-600">
              Experiencia
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-600"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-600"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-red-600 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Technology Analyst
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  <a className="hover:font-bold" href="https://www.perform-ly.com/">Performly</a>
                </span>
                <span className=" text-[.9rem] font-semibold text-red-600 sm:text-base">
                  Noviembre 2022 - Present
                </span>
                <ul className=" text-[.9rem] text-justify break-words text-gray-500 ml-4">
                  <li type="square">Ejecutar proyectos a nivel de desarrollo con tecnologías como: JS, CSS, HTML, PHP y Wordpress.</li>
                  <li type="square">Análisis de datos, generación de reportes.</li>
                  <li type="square">Implementar estrategias de SEO para Optimizaciones en los motores de búsqueda (SEO Técnico, OnPage, OffPage).</li>
                </ul>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-red-600">
              Educación
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-600"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-600"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-red-600 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Li. Ingeniería en Informática
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Universidad de Panamá
                </span>
                <span className=" text-[.9rem] font-semibold text-red-600 sm:text-base">
                  Abril 2020 - Diciembre 2024 
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Actualmente ejerciendo la carrera de ingeniería en informática.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
