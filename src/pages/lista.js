import React from 'react';
export default () => (

  <div class="container">
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
          <td>507890345</td>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
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
