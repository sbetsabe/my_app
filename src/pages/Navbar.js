import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Inicio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className={this.getNavLinkClass("/")}><NavLink to="/" >Listar</NavLink></li>
                <li className={this.getNavLinkClass("/agregar")}><NavLink to="/agregar">Agregar</NavLink></li>
              </ul>
            </div>
          </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;
