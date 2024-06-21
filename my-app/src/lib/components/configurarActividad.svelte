<script lang=ts>
    // Interfaz para representar un dato
    const fecha=new Date();

    interface Etapa {
      nombre_actividad: string;
      fecha_inicio:string;
      fecha_fin_estimada:string;
    }
  
    let etapa: Etapa = {
      nombre_actividad: '',
      fecha_inicio: fecha.toLocaleDateString(),
      fecha_fin_estimada:fecha.toLocaleDateString(),
    };
  
    // Función para manejar el envío del formulario
    function registrarDato() {
      // Aquí iría la lógica para procesar los datos del formulario
      console.log('Registrando dato:', etapa);
    }
  </script>
  
  <form on:submit|preventDefault={registrarDato}>
    <div class="actividad">
        <label for="nombre_actividad">Nombre Actividad</label>
        <input id="nombre_actividad" bind:value={etapa.nombre_actividad} />

        <label for="fecha_inicio">Fecha Inicio</label>
        <input id="fecha_inicio" bind:value={etapa.fecha_inicio} />

        <label for="fecha_fin_estimada">Fecha Fin Estimada</label>
        <input id="fecha_fin_estimada" bind:value={etapa.fecha_fin_estimada} />

    </div>

<!--   <a href="/admin/HomeAdmin/proyectos">
    <button type="submit">Registrar configuracion Actividad</button>
  </a> -->
  </form>
  
  <style>
    /* Estilos generales para el formulario */
     .actividad{
        display: flex;
        flex-direction: row;
    }
 

    form {
      max-width: 100%;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
      display: flex;
      flex-direction: column;
    }
  
    /* Estilos para las etiquetas y campos de entrada */
    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }
  
    input {
      width: 40%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 14px;
    }
  
    /* Estilos para el botón de envío */
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
  