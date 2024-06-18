<script lang="ts">
    // Define una interfaz para el tipo de datos que contiene 'datos'
    interface Cliente {
      codigo: string;
      nombres: string;
      apellidos: string;
      telefono: string[];
      correo: string[];
      direccion: string;
    }
  
    // Ahora declara 'datos' con el tipo explícito 'Dato[]'
    let datos: Cliente[] = [{
      codigo: '001',
      nombres: 'Juan',
      apellidos: 'Pérez',
      telefono: ['123456789', '987654321'],
      correo: ['juan.perez@example.com'],
      direccion: 'Calle Falsa 123'
    },
    {
      codigo: '002',
      nombres: 'María',
      apellidos: 'González',
      telefono: ['234567890'],
      correo: ['maria.gonzalez@example.com'],
      direccion: 'Avenida Siempre Viva 456'
    },
    {
      codigo: '003',
      nombres: 'Carlos',
      apellidos: 'Rodríguez',
      telefono: ['345678901', '765432109'],
      correo: ['carlos.rodriguez@example.com'],
      direccion: 'Boulevard de los Sueños Rotos 789'
    },
    // Puedes agregar más registros aquí
      // Tus datos aquí
    ];
  </script>
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Teléfono</th>
        <th>Correo</th>
        <th>Dirección</th>
      </tr>
    </thead>
    <tbody>
      {#each datos as dato}
        <tr>
          <td>{dato.codigo}</td>
          <td>{dato.nombres}</td>
          <td>{dato.apellidos}</td>
          <td>{dato.telefono}</td>
          <td>{dato.correo}</td>
          <td>{dato.direccion}</td>
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
  