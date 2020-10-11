import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="/">Inicio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/lista">
                    Lista de Usuarios
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Modulos de Usuarios
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/newuser">Nuevo Usuario</a>
                    <a className="dropdown-item" href="/modifyuser">Modificar Usuario</a>
                    <a className="dropdown-item" href="/consultuser">Consultar Usuario</a>
                    <a className="dropdown-item" href="/deleteuser">Eliminar Usuario</a>
                  </div>
                </li>
              </ul>
            </div>
            <form>
              <input type="text" value="Buscar" />
              <button type="submit" class="btn btn-primary btn-sm"> Buscar</button>
            </form>
          </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;
