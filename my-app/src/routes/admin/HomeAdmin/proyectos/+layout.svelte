<script lang="ts">
    // Define una interfaz para el tipo de datos que contiene 'datos'
    interface Dato {
      mineral: string;
      cliente: string;
      cantidad_a_extraer: string;
      costo: string;
      ubicacion: string;
      fecha_inicial: Date;
      fecha_fin_estimada: Date;
      etapa_actual: string;
      estatus:string;
    }
  
    // Ahora declara 'datos' con el tipo explícito 'Dato[]'
    let datos: Dato[] = [
      // Tus datos aquí
    ];
  </script>
  
  <table>
    <thead>
      <tr>
        <th>Mineral a Extraer</th>
        <th>Cliente</th>
        <th>Cantidad a Extraer</th>
        <th>Costo</th>
        <th>Ubicación</th>
        <th>Fecha Inicial</th>
        <th>Fecha Fin Estimada</th>
        <th>Etapa Actual</th>
        <th>Estatus</th>
      </tr>
    </thead>
    <tbody>
      {#each datos as dato}
        <tr>
          <td>{dato.mineral}</td>
          <td>{dato.cliente}</td>
          <td>{dato.cantidad_a_extraer}</td>
          <td>{dato.costo}</td>
          <td>{dato.ubicacion}</td>
          <td>{dato.fecha_inicial}</td>
          <td>{dato.fecha_fin_estimada}</td>
          <td>{dato.etapa_actual}</td>
          <td>{dato.estatus}</td>
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
  