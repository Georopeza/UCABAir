<script lang="ts">
    let searchTerm = '';
  function search() {
    // Lógica de búsqueda
    console.log(`Buscando: ${searchTerm}`); 
    }
    let opcionSeleccionada = 'Mineral';
    // Define una interfaz para el tipo de datos que contiene 'datos'
    interface Mineral {
      mineral: string;
      tipo_mineral: string;
      origen: string;
      precio_x_unidad: string;
      medida: string;
      Empresa_extractora: string[];
    }
  
    // Ahora declara 'datos' con el tipo explícito 'Dato[]'
    let datos: Mineral[] = [{
    mineral: 'Oro',
    tipo_mineral: 'Metal precioso',
    origen: 'El Callao, Bolívar',
    precio_x_unidad: '58$',
    medida: 'gramo',
    Empresa_extractora: ['Minera Goldex', 'Corpomin']
  },
  {
    mineral: 'Diamante',
    tipo_mineral: 'Gema',
    origen: 'Guarico',
    precio_x_unidad: '1500$',
    medida: 'quilate',
    Empresa_extractora: ['Diamantes del Orinoco', 'Gemstones Corp']
  },
  {
    mineral: 'Cobre',
    tipo_mineral: 'Metal básico',
    origen: 'Táchira',
    precio_x_unidad: '0.75$',
    medida: 'kilogramo',
    Empresa_extractora: ['Cobre Andino', 'Metales del Táchira']
  }
      // Tus datos aquí
    ];

      // Función para editar un registro
  function editarRegistro(index: number) {
    // Lógica para editar el registro en 'datos'
    console.log(`Editando registro en índice ${index}`);
  }

  // Función para eliminar un registro
  function eliminarRegistro(index: number) {
    // Lógica para eliminar el registro en 'datos'
    console.log(`Eliminando registro en índice ${index}`);
  }

  
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
      {#each datos as dato, i}
        <tr>
          <td>{dato.mineral}</td>
          <td>{dato.tipo_mineral}</td>
          <td>{dato.origen}</td>
          <td>{dato.precio_x_unidad}</td>
          <td>{dato.medida}</td>
          <td>{dato.Empresa_extractora}</td>
          <td>
          <div class="botonesUD">
            <button on:click={() => editarRegistro(i)}>
              <span>✏️</span> <!-- Icono de lápiz -->
            </button>
            <button on:click={() => eliminarRegistro(i)}>
              <span>🗑️</span> <!-- Icono de papelera -->
            </button>
          </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <a href="/admin/HomeAdmin/registrar/mineral">
    <button>Registrar Mineral</button>
</a>
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
  