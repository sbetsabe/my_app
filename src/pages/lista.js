import React from 'react';

export default () => (

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
          <td></td>
          <td>Nombre</td>
          <td>Apellidos</td>
          <td>Email</td>
        </tr>
        <tr>
          <td>115650890</td>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>607890343</td>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    </table>
  </div>
);
