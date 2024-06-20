<script lang=ts>
    // Interfaz para representar un dato
    interface Proyecto {
      mineral: string;
      cliente: string;
      cantidad_a_extraer: string;
      costo: string;
      ubicacion: string;
      fecha_inicial: Date;
      fecha_fin_estimada: Date;
      etapa_actual: string;
      estatus: string;
    }
  
    let proyecto: Proyecto = {
      mineral: '',
      cliente: '',
      cantidad_a_extraer: '',
      costo: '',
      ubicacion: '',
      fecha_inicial: new Date(),
      fecha_fin_estimada: new Date(),
      etapa_actual: '',
      estatus: '',
    };
  
    // Función para manejar el envío del formulario
    function registrarDato() {
      // Aquí iría la lógica para procesar los datos del formulario
      console.log('Registrando dato:', proyecto);
    }
  </script>
  
  <form on:submit|preventDefault={registrarDato}>
    <h2>Registrar Proyecto</h2>
  
    <label for="mineral">Mineral</label>
    <input id="mineral" bind:value={proyecto.mineral} />
  
    <label for="cliente">Cliente</label>
    <input id="cliente" bind:value={proyecto.cliente} />
  
    <label for="cantidadExtraer">Cantidad a extraer</label>
    <input id="cantidadExtraer" bind:value={proyecto.cantidad_a_extraer} />
  
    <label for="costo">Costo</label>
    <input id="costo" bind:value={proyecto.costo} />
  
    <label for="ubicacion">Ubicación</label>
    <input id="ubicacion" bind:value={proyecto.ubicacion} />
  
    <label for="fechainicial">Fecha Inicial</label>
    <input id="fechainicial" bind:value={proyecto.fecha_inicial} />
  
    <label for="fechafinestimada">Fecha Fin Estimada</label>
    <input id="fechafinestimada" bind:value={proyecto.fecha_fin_estimada} />
  
    <label for="etapa_actual">Etapa Actual</label>
    <input id="etapa_actual" bind:value={proyecto.etapa_actual} />
  
    <label for="estatus">Estatus</label>
    <input id="estatus" bind:value={proyecto.estatus} />
    <!-- Agrega más campos según la interfaz Dato -->
    <!-- Ejemplo: fechas, etapa actual, estatus -->
  
    <button type="submit">Registrar Dato</button>
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
  