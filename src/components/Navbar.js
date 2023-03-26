import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import { IoIosMenu } from "react-icons/io";
import { TbNavigation } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='nav'>
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="" /></Link>

        <IoIosMenu onClick={handleToggle} className="hamburger-icon" size={40} />
      </div>

      <nav className={isOpen ? "navbar open" : "navbar"}>

        <div className="navbar-links">
          <h1>Vous souhaitez spécifier votre recherche ? </h1>
          <p>Pas de soucis ! Sélectionnez une option ci-dessous :</p>

          <div className="ideas-list">
            <Link to="/type"><TbNavigation className='nav-icon' />Rechercher en fonction du type d'activité</Link>
            <Link to="/number"><TbNavigation className='nav-icon' />Rechercher selon le nombre de personnes</Link>
            <Link to="/price"><TbNavigation className='nav-icon' />Rechercher selon le prix</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar