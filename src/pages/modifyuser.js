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
        <h2>Modificar usuario</h2>
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
    </Fragment>
  )
};
