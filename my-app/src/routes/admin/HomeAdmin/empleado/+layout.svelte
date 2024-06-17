<script lang="ts">
    // Define una interfaz para el tipo de datos que contiene 'datos'
    interface Dato {
      cedula: string;
      nombres: string;
      apellidos: string;
      telefono: string[];
      correo: string[];
      area_trabajo: string;
      sueldo: string;
      especialidad:string;
    }
  
    // Ahora declara 'datos' con el tipo explícito 'Dato[]'
    let datos: Dato[] = [
      // Tus datos aquí
    ];
  </script>
  
  <table>
    <thead>
      <tr>
        <th>Cedula</th>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Teléfono</th>
        <th>Correo</th>
        <th>Area de Trabajo</th>
        <th>Sueldo</th>
        <th>Especialidad</th>
      </tr>
    </thead>
    <tbody>
      {#each datos as dato}
        <tr>
          <td>{dato.cedula}</td>
          <td>{dato.nombres}</td>
          <td>{dato.apellidos}</td>
          <td>{dato.telefono}</td>
          <td>{dato.correo}</td>
          <td>{dato.area_trabajo}</td>
          <td>{dato.sueldo}</td>
          <td>{dato.especialidad}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  <style>
      table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #adadad;
      padding: 8px;
      text-align: left;
      font-family: 'Baskervville';
      font-style: light;
      align-items: center;
      text-align: center;
      letter-spacing: -0.03em;

    }
    thead {
      background-color:white;
    }
  </style>
  