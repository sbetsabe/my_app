import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'

class Footer extends React.Component {
  getNavLinkClass = (path) =>  {
    return this.props.location.pathname === path ? 'active' : '';
  }
  render() {
    return(
      <div className="container bg-dark text-light">Footer</div>
    )
  }
}

Footer = withRouter(Footer);
export default Footer;
