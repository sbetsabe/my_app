import React, {Fragment, useState} from 'react';

export default() => {

  const [datos, setDatos] = useState({
    cedula: '',
    nombre: '',
    apellidos: '',
    email: ''
  })

  const handleInputChange = (event) => {
      //console.log(event.target.value)
      setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
  }

  const enviarDatos = (event) => {
      event.preventDefault();
      console.log(datos.cedula + ' ' + datos.nombre + ' ' + datos.apellidos + ' ' + datos.email)
  }

  return(
    <Fragment>
      <div className="container p-3 my-3 border">
        <h2>Registrar nuevo usuario</h2>
        <form className="was-validated" onSubmit={enviarDatos}>
          <div className="form-group">
            <input
              placeholder="Ingrese cedula"
              className="form-control"
              type="text"
              name="cedula"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              placeholder="Ingrese nombre"
              className="form-control"
              type="text"
              name="nombre"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              placeholder="Ingrese apellidos"
              className="form-control"
              type="text"
              name="apellidos"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <input
              placeholder="Ingrese correo electronico"
              className="form-control"
              type="email"
              name="email"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <button
              className="btn btn-dark"
              type="submit"
            >Enviar</button>
          </div>
        </form>
      </div>
      <div className="container p-3 my-3 border">
        <h2>Lista de Usuarios</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{datos.cedula}</td>
              <td>{datos.nombre}</td>
              <td>{datos.apellidos}</td>
              <td>{datos.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
};
