import React from 'react';
export default () => (
    <div className="container">
      <h2>Modificar usuario</h2>
      <form className="was-validated">
        <div className="form-group">
          <label>Cedula:</label>
          <input type="text" className="form-control" placeholder="Escriba su cedula" required/>
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" className="form-control" placeholder="Escriba su nombre" required/>
        </div>
        <div className="form-group">
          <label>Apellidos:</label>
          <input type="text" className="form-control" placeholder="Escriba sus apellidos" required/>
        </div>
        <div className="form-group">
          <label>Correo electronico:</label>
          <input type="email" className="form-control" placeholder="Escriba su correo electronico" required/>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>
);
