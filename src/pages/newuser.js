import React from 'react';

export default () => (
    <div className="container p-3 my-3 border">
      <h2>Ingresar nuevo usuario</h2>
      <form className="was-validated">
        <div className="form-group">
          <label htmlFor="cedula">Cedula:</label>
          <input
            name="cedula"
            type="text"
            className="form-control"
            placeholder="Escriba su cedula"
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escriba su nombre"
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escriba sus apellidos"
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electronico:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Escriba su correo electronico"
            required/>
        </div>
        <button type="button" class="btn btn-dark">Guardar</button>
      </form>
    </div>
);
