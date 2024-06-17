<script lang="ts">
    // Define una interfaz para el tipo de datos que contiene 'datos'
    interface Dato {
      mineral: string;
      tipo_mineral: string;
      origen: string;
      precio_x_unidad: string;
      medida: string;
      Empresa_extractora: string[];
    }
  
    // Ahora declara 'datos' con el tipo explícito 'Dato[]'
    let datos: Dato[] = [
      // Tus datos aquí
    ];
  </script>
  
  <table>
    <thead>
      <tr>
        <th>Mineral</th>
        <th>Tipo de mineral</th>
        <th>Origen</th>
        <th>Precio por unidad</th>
        <th>Medida</th>
        <th>Empresa extractora</th>
      </tr>
    </thead>
    <tbody>
      {#each datos as dato}
        <tr>
          <td>{dato.mineral}</td>
          <td>{dato.tipo_mineral}</td>
          <td>{dato.origen}</td>
          <td>{dato.precio_x_unidad}</td>
          <td>{dato.medida}</td>
          <td>{dato.Empresa_extractora}</td>
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
  