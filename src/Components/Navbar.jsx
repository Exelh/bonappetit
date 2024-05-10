import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="navbar-left"> {/* Navega a Home */}
        <img className='navbar-logo' src="/Images/Logo-generico.jpg" alt="Logo Marca" />
        <h2 className="navbar-heading">BonAppetit</h2>
      </Link>
      <ul className='nav-list'>
        <li className='nav-item'>Inicio</li>
        <li className='nav-item'>Contacto</li>
        <li className='nav-item'>Sobre Nosotros</li>
      </ul>
      <div className="navbar-right">
        <button className="navbar-button">Crear Cuenta</button>
        <button className="navbar-button">Iniciar sesión</button>
      </div>
    </nav>
  )
}

export default Navbar
