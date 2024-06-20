<script lang="ts">
  let searchTerm = '';
  function search() {
    // Lógica de búsqueda
    console.log(`Buscando: ${searchTerm}`); 
    }
    let opcionSeleccionada = 'Proveedor';
    interface Proveedor {
      razon_social: string;
      rif: string;
      direccion_fiscal: string;
      telefono: string[];
      correo: string[];
      capacidad_instalada: string;
    }
  
    let datos: Proveedor[] = [{
    razon_social: 'Industrias Metalmecánicas Orinoco C.A.',
    rif: 'J-30584623-7',
    direccion_fiscal: 'Zona Industrial Matanzas, Puerto Ordaz, Bolívar',
    telefono: ['+58-286-9945678', '+58-286-9945679'],
    correo: ['contacto@imorinoco.com', 'ventas@imorinoco.com'],
    capacidad_instalada: '5000 toneladas/mes'
  },
  {
    razon_social: 'Alimentos Carabobo S.A.',
    rif: 'J-20134567-8',
    direccion_fiscal: 'Av. Henry Ford, Valencia, Carabobo',
    telefono: ['+58-241-8334567', '+58-241-8334568'],
    correo: ['info@alica.com', 'soporte@alica.com'],
    capacidad_instalada: '20000 cajas/mes'
  },
  {
    razon_social: 'Textiles Maracay C.A.',
    rif: 'J-30987654-2',
    direccion_fiscal: 'Calle Los Cedros, Maracay, Aragua',
    telefono: ['+58-243-5556789', '+58-243-5556790'],
    correo: ['atencioncliente@textilmaracay.com', 'ventas@textilmaracay.com'],
    capacidad_instalada: '15000 metros de tela/mes'
  }
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
  <a href="/admin/HomeAdmin/registrar/proveedor">
    <button>Registrar Proveedor</button>
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
  