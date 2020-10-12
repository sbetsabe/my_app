import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import ModificarUsuario from './pages/modifyuser';
import EliminarUsuario from './pages/deleteuser';
import ConsultarUsuario from './pages/consultuser';
import Lista from './pages/lista';
import NewUser from './pages/newuser';
import Home from './pages/home';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./pages/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/modifyuser" component={ModificarUsuario} />
            <Route path="/lista" component={Lista} />
            <Route path="/newuser" component={NewUser} />
            <Route path="/deleteuser" component={EliminarUsuario} />
            <Route path="/consultuser" component={ConsultarUsuario} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
