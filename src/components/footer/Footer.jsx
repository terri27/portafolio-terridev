import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" text-red-600 font-bold text-5xl sm:text-3xl">¡Hablemos!</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"
            target="_blank"
            href="https://t.me/Ivandevv"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"
            target="_blank"
            href="https://wa.me/+50761569920"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://github.com/terri27"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaGithub  className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>GitHub</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2024 terriDev </span> Todos los derechos reservados
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
