import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SocialButton from "../utils/SocialButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {
  // Estado para el carrito, 
  const [cart, setCart] = useState([
    { id: 1, name: "Pizza Margherita", price: 10 },
    { id: 2, name: "Pizza Pepperoni", price: 12 },
    { id: 3, name: "Pizza Hawaiana", price: 11 }
  ]);

  // Función para calcular el total del carrito
  const getTotalCart = () => {
    return cart.reduce((total, item) => total + item.price, 0); // Suma de los precios
  };

  // Función para formatear el total (por ejemplo, como moneda)
  const monedaLocal = (amount) => {
    return `$${amount.toFixed(2)}`; // Formatear como moneda
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Nombre/ enlaces a la izquierda */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mía!
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                🍕 Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                🔐 Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                🔐 Register
              </a>
            </li>
          </ul>
        </div>

        {/* Button social a la izq */}
        <div className="d-flex align-items-center">
          {/* Button social */}
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-2">
            <li className="nav-item">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>

          {/* Boton carrito */}
          <Link to="/carrito" className="btn btn-primary ms-3">
            🛒 Total: {monedaLocal(getTotalCart())}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

