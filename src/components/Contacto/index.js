import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"

const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        toast('Cargando...')
        e.preventDefault();
    
        emailjs.sendForm('service_1twye69', 'template_hhm8pcv', form.current, 'z5OjS3KJIHi-8AIA4')
          .then((result) => {
              console.log(result.text);
              toast.success('Mensaje Enviado')
          }, (error) => {
              console.log(error.text);
              toast.error('Un error a ocurrido')
          });
      };

    return (
        <>
        <div className="contact-form">

        <ToastContainer />
<h2 className="h1-responsive font-weight-bold text-center my-4">Contáctanos</h2>
<p className="text-center w-responsive mx-auto mb-5">¿Buscas algo en específico o cotizaciones personalizadas? No dudes en contaactarnos.</p>

<div className="row g-0">

    <div className="col-md-9 mb-5">
        <form id="contact-form" name="contact-form" ref={form} onSubmit={sendEmail}>

            <div className="row">

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="user_name" className="form-control"/>
                        <label htmlFor="name" className="">Nombre</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="user_email" className="form-control"/>
                        <label htmlFor="email" className="">Correo Electrónico</label>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control"/>
                        <label htmlFor="subject" className="">Asunto</label>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label htmlFor="message">Mensaje</label>
                    </div>

                </div>
            </div>

            <div className="text-center text-md-left">
                <button className="btn btn-primary" type='submit'>Envíar Mensaje</button>
            </div>
        </form>
        <div className="status"></div>
    </div>

    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
            </li>
        </ul>
    </div>

</div>

</div>
        </>
    )
}

export default Contacto;