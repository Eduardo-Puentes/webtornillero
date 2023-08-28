import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css"
import FreeShipping from '../imgs/entrega-gratis.avif'
import Safe from '../imgs/99665.png'
import Support from '../imgs/839961.png'
import Discount from '../imgs/879757.png'
import Contacto from '../Contacto';

const Dashboard = () => {

    return (
        <>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">

            <div className="carousel-item active">
                <img className='bd-placeholder-img backgorund-image' focusable="false" src="https://images.pexels.com/photos/936594/pexels-photo-936594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Screws Background'/>

                <div className="container">
                <div className="carousel-caption text-end">
                    <h1>Encuentra todo lo que necesites</h1>
                    <p>Nuestro catálogo tiene todo lo que buscas, aquí podras encontrar lo que necesites.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/catalogo">Catálogo</Link></p>
                </div>
                </div>
            </div>

            <div className="carousel-item">
                <img className='bd-placeholder-img backgorund-image' focusable="false" src="https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Screws Background'/>

                <div className="container">
                <div className="carousel-caption">
                    <h1>¿Tienes dudas?</h1>
                    <p>No dudes en contactarnos, envíanos un mensaje por la web o llámanos.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/contact">Contacto</Link></p>
                </div>
                </div>
            </div>


            <div className="carousel-item">
                <img className='bd-placeholder-img backgorund-image' focusable="false" src="https://images.pexels.com/photos/259968/pexels-photo-259968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Screws Background'/>

                <div className="container">
                <div className="carousel-caption text-start">
                    <h1>¿Buscas comprar en gran cantidad?</h1>
                    <p>Da click para obtener una cotización instantanea.</p>
                    <p><Link className="btn btn-lg btn-primary" to="/pedidos">Cotizar</Link></p>
                </div>
                </div>
            </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="container">
    </div>

        <div className="row row-cols-1 row-cols-lg-1 row-cols-md-1 row-cols-sm-1 plus-section">
            <div className="col sols">
                <img alt="Free Shipping Icon" src={FreeShipping} className="plus-section-icons m-3 crop-icon"></img><span className='plus-section-text'>Envío Gratis</span>
            </div>
            <div className="col sols">
                <img alt="Secure Icon" src={Safe} className="plus-section-icons m-3"></img><span className='plus-section-text'>100% Seguro</span>
            </div>
            <div className="col sols">
                <img alt="Discount Icon" src={Discount} className="plus-section-icons m-3"></img><span className='plus-section-text'>Descuento Mayorista</span>
            </div>
            <div className="col sols">
                <img alt="Support Icon" src={Support} className="plus-section-icons m-3"></img><span className='plus-section-text'>Soporte 24/7</span>
            </div>
        </div>

        <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                    <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        <div>
            <Contacto/>
        </div>

        
        </>
    )
}

export default Dashboard;