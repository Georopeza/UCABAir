<script lang="ts">
  let searchTerm = '';
  function search() {
    // Lógica de búsqueda
    console.log(`Buscando: ${searchTerm}`); 
    }
    let opcionSeleccionada = 'Empleados';
    // Define una interfaz para el tipo de datos que contiene 'datos'
    interface Empleado {
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
    let datos: Empleado[] = [{
    cedula: 'V-12345678',
    nombres: 'Juan',
    apellidos: 'Pérez',
    telefono: ['+58-212-1234567', '+58-412-7654321'],
    correo: ['juan.perez@example.com', 'jperez@workemail.com'],
    area_trabajo: 'Ingeniería',
    sueldo: '2500$',
    especialidad: 'Desarrollo de Software'
  },
  {
    cedula: 'E-87654321',
    nombres: 'María',
    apellidos: 'González',
    telefono: ['+58-212-7654321', '+58-416-1234567'],
    correo: ['maria.gonzalez@example.com', 'mgonzalez@workemail.com'],
    area_trabajo: 'Recursos Humanos',
    sueldo: '2000$',
    especialidad: 'Gestión del Talento'
  },
  {
    cedula: 'V-12344321',
    nombres: 'Carlos',
    apellidos: 'Martínez',
    telefono: ['+58-212-9876543', '+58-414-6543210'],
    correo: ['carlos.martinez@example.com', 'cmartinez@workemail.com'],
    area_trabajo: 'Marketing',
    sueldo: '2200$',
    especialidad: 'Estrategia Digital'
  }
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
  <a href="/admin/HomeAdmin/registrar/empleado">
    <button>Registrar Empleado</button>
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
  