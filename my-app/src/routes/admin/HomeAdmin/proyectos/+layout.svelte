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
      codigo:number;
      mineral: string; //se puede obtener de otra tabla
      cliente: string;  //se puede obtener de otra tabla
      cantidad_a_extraer: string;
      costo: string;
      ubicacion: string;  //se puede obtener de otra tabla
      fecha_inicial: string;
      fecha_fin_estimada: string;
      etapa_actual: string; //se puede obtener de otra tabla
      estatus:string;
    }
    let min=0;
    let max=100000;

    function getRandomNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let numeroAleatorio = getRandomNumber(1, 100);
  
    // Ahora declara 'datos' con el tipo explícito 'Dato[]'
    let proyectos: Proyecto[] = [{
    codigo: getRandomNumber(min,max),
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
    codigo: getRandomNumber(min,max),
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
    codigo: getRandomNumber(min,max),
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

    function editarRegistro(index: number) {
    // Lógica para editar el registro en 'datos'
    console.log(`Editando registro en índice ${index}`);
  }

  // Función para eliminar un registro
  function eliminarRegistro(index: number) {
    // Lógica para eliminar el registro en 'datos'
    console.log(`Eliminando registro en índice ${index}`);
  }

  async function generarReporte( proyectos:Proyecto[]) {
      //logica para generar reporte ()
  }

  </script>
  <h2>Proyectos</h2>
  <table>
    <thead>
      <tr>
        <th>Codigo</th>
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
      {#each proyectos as proyecto, i}
        <tr>
          <td>{proyecto.codigo}</td>
          <td>{proyecto.mineral}</td>
          <td>{proyecto.cliente}</td>
          <td>{proyecto.cantidad_a_extraer}</td>
          <td>{proyecto.costo}</td>
          <td>{proyecto.ubicacion}</td>
          <td>{proyecto.fecha_inicial}</td>
          <td>{proyecto.fecha_fin_estimada}</td>
          <td>{proyecto.etapa_actual}</td>
          <td>{proyecto.estatus}</td>
          <td>
            <div class="botonesUD">
              <a href=/admin/HomeAdmin/registrar/proyecto>
                  <button on:click={() => editarRegistro(i)}>
                    <span>✏️</span> <!-- Icono de lápiz -->
                  </button>
              </a>
              <button on:click={() => eliminarRegistro(i)}>
                <span>🗑️</span> <!-- Icono de papelera -->
              </button>
              <a href=/admin/HomeAdmin/etapas>
                <button>Ver Etapas</button>
              </a>
            </div>
            </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <a href="/admin/HomeAdmin/registrar/proyecto/configuracionProyecto">
    <button>Registrar Proyecto</button>
  </a>
  <button on:click={() => generarReporte(proyectos)}>Generar Reporte
  </button>
  <style>
        .botonesUD{
      display: flex;
        background-color:white;
        color: #fff;
        border: none;
        border-radius: 3px;
        padding: 10px 20px;
    }

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

    button {
        background-color: #050505;
        color: #fff;
        border: none;
        border-radius: 3px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
    }
  </style>
  