<script lang=ts>
    // Interfaz para representar un dato
    interface Proyecto {
      mineral: string;
      cliente: string;
      cantidad_a_extraer: string;
      costo: string;
    }
  
    let proyecto: Proyecto = {
      mineral: '',
      cliente: '',
      cantidad_a_extraer: '',
      costo:''
    };
  
    // Función para manejar el envío del formulario
    function registrarDato() {
      // Aquí iría la lógica para procesar los datos del formulario
      console.log('Registrando dato:', proyecto);
    }
  </script>
  
  <form on:submit|preventDefault={registrarDato}>
    <h2>Configuracion Explotacion</h2>
  
    <label for="mineral">Mineral</label>
    <input id="mineral" bind:value={proyecto.mineral} />
  

  <a href="/admin/HomeAdmin/proyectos">
    <button type="submit">Registrar configuracion Proyecto</button>
  </a>
  </form>
  
  <style>
    /* Estilos generales para el formulario */
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
  