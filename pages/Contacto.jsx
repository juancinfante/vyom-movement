/* eslint-disable no-unused-vars */
import NavBar from "../src/components/NavBar"
import banner from '../src/assets/portada.jpg'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Footer from "../src/components/Footer";

const Contacto = () => {

    const form = useRef();
    const [spinner, setSpinner] = useState(false);

    const sendEmail = (e) => {
    e.preventDefault();
    setSpinner(true);
    emailjs.sendForm('service_hzy8t5f', 'template_l4v8bud', form.current, 'yAU9U-moTFiEKBuRZ')
      .then((result) => {
        swal("Gracias!", "Pronto estaremos en contacto.", "success");
        form.current.reset();
        setSpinner(false);
        
      }, (error) => {
        swal("Hubo un error!", "Intentalo mas tarde.", "error"); 
      });
  };
  const handleClick = () => {
    form.current.reset();
  };


  return (
    <>
    <div className="App">
        <NavBar />
        <div className="banner-clase">
                    <img src={banner} alt="" />
                    <h1>Contacto</h1>
                </div>
        <div className="container">
            <div className="form-container">
                <div className="info-form">
                    <p>Si tienes dudas o consultas</p>
                    <h1>¡Vamos a ponernos en contacto!</h1>
                    <p>Todos los intercambios son bienvenidos</p>
                    <p>Si necesitas más información sobre <strong>clases privadas individuales o grupales, clases regulares, intensivo de stretching</strong> o sobre algún proyecto, te invito a llenar este formulario.</p>
                    <p>¡También puedes encontrarme a través de <a href="https://www.instagram.com/vyom.movement/" target="blank">Instagram!</a></p>
                    <p>Nos vemos en el mat,</p>
                    <p>Agus.</p>
                </div>
                <form action="" className="form" ref={form} onSubmit={sendEmail}>
                    <input name="user_name" type="text" placeholder="Nombre completo"/>
                    <input name="user_email" type="email" placeholder="Email"/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Descripción"></textarea>
                    <button type="submit">
                        {
                            spinner ? 
                            <p>Enviando <FontAwesomeIcon icon={faSpinner} className="rotating"/> </p>
                            : 
                        <p>Enviar</p>
                        }
                        </button>
                </form>
            </div>
        </div>
        <Footer />
        </div>

    </>
  )
}

export default Contacto