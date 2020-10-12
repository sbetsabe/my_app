import React, {Fragment, useState} from 'react';
import { datos } from './lista.json' // O el nombre de tu archivo

export default() => {

  const [usuario, setUsuario] = useState({
    id: ''
  })

  const handleInputChange = (event) => {
      //console.log(event.target.value)
      setUsuario({
        ...usuario,
        [event.target.name] : event.target.value
      })
  }

  const enviarUsuario = (event) => {
      event.preventDefault();
      console.log(usuario.id)
  }

  return(
    <Fragment>
      <div className="container p-3 my-3 border">
        <h2>Consultar usuario por numero de cédula</h2>
        <form className="form-group" onSubmit={enviarUsuario}>
          <div className="form-group">
            <input
              placeholder="Ingrese cedula"
              className="form-control"
              type="text"
              name="id"
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
        <h2>Usuario</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Cedula</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Email</th>
            </tr>
          </thead>
          {datos.map(({nombre, apellidos, email, cedula}) =>(
            <tbody>
              <tr>
                <td key={cedula.id}>{cedula}</td>
                <td key={cedula.id}>{nombre}</td>
                <td key={cedula.id}>{apellidos}</td>
                <td key={cedula.id}>{email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </Fragment>
  )
};
