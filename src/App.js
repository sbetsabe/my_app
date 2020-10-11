import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Modulos from './pages/modulos';
import Lista from './pages/lista';
import Home from './pages/home';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./pages/Navbar";
import Footer from "./pages/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/modulos" component={Modulos} />
            <Route path="/lista" component={Lista} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
