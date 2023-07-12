import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from '../imgs/Logo_tornillero-1-removebg.png'
import "./styles.css"

const Navbar = () => {

    const [isActiveOrder, setIsActiveOrder] = useState(false);
    const [isActiveDashboard, setIsActiveDashboard] = useState(false);
    const [isActiveInventory, setIsActiveInventory] = useState(false);

    const location = useLocation();

    const loadTab = (path) => {
        switch (path) {
            case 'order':
                setIsActiveOrder(true)
                setIsActiveDashboard(false)
                setIsActiveInventory(false)
                break;
            case 'inventory':
                setIsActiveOrder(false)
                setIsActiveDashboard(false)
                setIsActiveInventory(true)
                break;
            default:
                setIsActiveOrder(false)
                setIsActiveDashboard(true)
                setIsActiveInventory(false)
                break;
      }
    }

    useEffect(() => {
        loadTab(location.pathname.slice(1));
    }, [])

    return (
        <>
        <nav>
        <div className="top-container">
            <div className='left-side-container'>
                <p><i class="bi bi-telephone"></i> Llámanos: (222) 222-2222</p>
                <p><i class="bi bi-box-seam"></i> Envío gratis después de $500</p>
            </div>
            <div class="top-trapezoid"></div>
            <div className='right-side-container'>
                <p>Moneda: MXN</p>
                <p><i class="bi bi-envelope"></i> Contacto</p>
                <p><i class="bi bi-geo-alt"></i> Sucursales</p>
            </div>
        </div>
        <div class="align-items-center header g-0 columns">
            <div class="column complements">
                <ul class="nav justify-content-center links-list">
                    <li><a href="#" class="nav-link px-2">Home</a></li>
                    <li><a href="#" class="nav-link px-2">Features</a></li>
                    <li><a href="#" class="nav-link px-2">Pricing</a></li>
                    <li><a href="#" class="nav-link px-2">FAQs</a></li>
                    <li><a href="#" class="nav-link px-2">About</a></li>
                </ul>
            </div>
            
            <div class="column">
                <a href="/" class="align-items-center text-decoration-none">
                    <img className="logo" src={Logo} alt="Sr Tornillero Logo"/>
                </a>
                <form class="align-items-center">
                    <div class="input-group rounded search-section">
                        <input class="inp" placeholder="¿Qué quieres encontrar hoy?"/>
                    </div>
                </form>   
                <div class="bottom-design">
                    <div class="trapezoid"></div>
                    <div class="mini-trapezoid"></div>
                </div>
            </div>

            <div class="column complements">
                <div>
                    <button type="button" class="btn btn-cart"><i class="bi bi-person right-icons"></i>Mi Cuenta</button>
                    <button type="button" class="btn btn-cart me-2"><i class="bi bi-cart right-icons"></i>Carrito</button>
                </div>
            </div>
        </div>
        </nav>
        <div className="containerb">
            <Outlet/>
        </div>
        </>
    )
}

export default Navbar;