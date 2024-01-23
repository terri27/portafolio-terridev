import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Nuevo estado para el mensaje de éxito

  const sendEmail = (e) => {
    e.preventDefault();

    // Validación
    if (!formData.user_name || !formData.user_email || !formData.message) {
      console.log('Validación fallida, se mostrará el alerta.');
      alert('Por favor, rellena todos los campos.');
      return;
    }

    emailjs.sendForm('service_ls5gy2g', 'template_lkgu95m', form.current, '0UyXyMoXsDkCa4qNW')
      .then((result) => {
        console.log(result.text);
        setFormSubmitted(true); // Indicar que el formulario fue enviado
        
        // Limpiar el formulario después de enviar
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });

        setShowSuccessMessage(true); // Mostrar el mensaje de éxito

        // Ocultar el mensaje de éxito después de 5 segundos (opcional)
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
        
        // Opcional: Mostrar un mensaje de éxito o resetear el estado `formSubmitted` si quieres permitir otro envío
        // alert('Mensaje enviado con éxito!');
        // setFormSubmitted(false);

      }, (error) => {
        console.log(error.text);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
    return (
    <div id="contacto" className="container m-auto mt-16">
      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-red-600 sm:text-2xl">
          Contacto
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div 
            data-aos="zoom-in"
            >
              <h1 className="text-red-600 text-5xl font-bold sm:text-3xl">Necesitas</h1>
              <h3 className="text-xl sm:text-lg">              
                Un Hermoso diseño para su sitio web deje una solicitud o empezar a posicionarte en los motores de búsqueda como Google.
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-red-600 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
        <form
          id=""
          ref={form}
          onSubmit={sendEmail}
          data-aos="zoom-in"
          className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
        >
          <input
            className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            type="text"
            placeholder="Tu nombre"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            required
          />

          <input
            className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            type="email"
            placeholder="Tu correo electrónico"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            required
          />
          
          <textarea
            className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
            rows="4"
            placeholder="Escribe cómo puedo ayudarte"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button
            className=" py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-500 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            type="submit"
            disabled={false}
          >
            <span>Enviar</span>
            <RiSendPlaneFill/>
          </button>
          {showSuccessMessage && (
    <div className="mt-7 px-4 w-full rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
      <div className="flex justify-between py-3">
          <div className="flex">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
              </div>
              <div className="self-center ml-3">
                  <span className="text-green-600 font-semibold">
                      ¡Muchas Gracias!
                  </span>
                  <p className="text-green-600 mt-1">
                      Has enviado el formulario correctamente.
                  </p>
              </div>
          </div>
          <button className="self-start text-green-500" onClick={() => setShowSuccessMessage(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
          </button>
      </div>
    </div>
  )}
        </form>
        
      </div>
      
      </div>
    </div>
  );
};

export default Contact;
