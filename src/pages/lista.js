import React from 'react'
import { datos } from './lista.json' // O el nombre de tu archivo

export default () => (
  <div className="container p-3 my-3 border">
    <div className="container-fluid">
      <h3>Lista de usuarios registrados</h3>
    </div>
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
            <td key={cedula}>{cedula}</td>
            <td key={cedula}>{nombre}</td>
            <td key={cedula}>{apellidos}</td>
            <td key={cedula}>{email}</td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>

);
