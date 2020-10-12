import React, {Fragment, useState} from 'react';

export default() => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: ''
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
      console.log(datos.nombre + ' ' + datos.apellidos)
  }

  return(
    <Fragment>
      <h1>Modificar usuario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese apellidos"
            className="form-control"
            type="text"
            name="apellidos"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-dark"
            type="submit"
          >Enviar</button>
        </div>
      </form>
    </Fragment>
  )
};
