import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-fieb.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} alt="Logo" width={150} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">Início</Link>
            </li>
            <li className="nav-item">
              <Link to={'/visual'} className="nav-link">Produtos</Link>
            </li>
            <li className="nav-item">
              <Link to={'/quem'} className="nav-link">Quem somos</Link>
            </li>
            <li className="nav-item">
              <Link to={'/fale'} className="nav-link">Fale Conosco</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
