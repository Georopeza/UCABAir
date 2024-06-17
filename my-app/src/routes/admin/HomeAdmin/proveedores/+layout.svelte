<script lang="ts">
    // Define una interfaz para el tipo de datos que contiene 'datos'
    interface Dato {
      razon_social: string;
      rif: string;
      direccion_fiscal: string;
      telefono: string[];
      correo: string[];
      capacidad_instalada: string;
    }
  
    // Ahora declara 'datos' con el tipo explícito 'Dato[]'
    let datos: Dato[] = [
      // Tus datos aquí
    ];
  </script>
  
  <table>
    <thead>
      <tr>
        <th>Razon Social</th>
        <th>RIF</th>
        <th>Dirección Fiscal</th>
        <th>Teléfono</th>
        <th>Correo</th>
        <th>Capacidad Instalada</th>
      </tr>
    </thead>
    <tbody>
      {#each datos as dato}
        <tr>
            <td>{dato.razon_social}</td>
            <td>{dato.rif}</td>
            <td>{dato.direccion_fiscal}</td>
            <td>{dato.telefono}</td>
            <td>{dato.correo}</td>
            <td>{dato.capacidad_instalada}</td>
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
  