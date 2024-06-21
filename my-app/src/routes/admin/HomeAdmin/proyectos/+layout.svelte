<script lang="ts">
  let searchTerm = '';
  const fecha=new Date();
  function search() {
    // Lógica de búsqueda
    console.log(`Buscando: ${searchTerm}`); 
    }
    let opcionSeleccionada = 'Clientes';
    // Define una interfaz para el tipo de datos que contiene 'datos'
    interface Proyecto {
      mineral: string;
      cliente: string;
      cantidad_a_extraer: string;
      costo: string;
      ubicacion: string;
      fecha_inicial: string;
      fecha_fin_estimada: string;
      etapa_actual: string;
      estatus:string;
    }
  
    // Ahora declara 'datos' con el tipo explícito 'Dato[]'
    let datos: Proyecto[] = [{
    mineral: 'Hierro',
    cliente: 'Construcciones Metálicas C.A.',
    cantidad_a_extraer: '10000 toneladas',
    costo: '600000$',
    ubicacion: 'Cerro Bolívar, Bolívar',
    fecha_inicial: fecha.toLocaleDateString(),
    fecha_fin_estimada:fecha.toLocaleDateString() ,
    etapa_actual: 'Extracción',
    estatus: 'En progreso'
  },
  {
    mineral: 'Bauxita',
    cliente: 'Aluminios del Caroní S.A.',
    cantidad_a_extraer: '5000 toneladas',
    costo: '250000$',
    ubicacion: 'Los Pijiguaos, Bolívar',
    fecha_inicial: fecha.toLocaleDateString(),
    fecha_fin_estimada: fecha.toLocaleDateString(),
    etapa_actual: 'Preparación del terreno',
    estatus: 'Retrasado'
  },
  {
    mineral: 'Oro',
    cliente: 'Joyerías El Dorado C.A.',
    cantidad_a_extraer: '100 kilogramos',
    costo: '4800000$',
    ubicacion: 'El Callao, Bolívar',
    fecha_inicial: fecha.toLocaleDateString(),
    fecha_fin_estimada: fecha.toLocaleDateString(),
    etapa_actual: 'Evaluación ambiental',
    estatus: 'Pendiente'
  }
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
  <a href="/admin/HomeAdmin/registrar/proyecto/configuracionProyecto">
    <button>Registrar Proyecto</button>
  </a>
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
  