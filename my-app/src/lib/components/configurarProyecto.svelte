<script lang=ts>
  import { goto } from "$app/navigation";
  const fecha=new Date();
    // Interfaz para representar un dato
    interface Proyecto {
      mineral: string;
      cantidad_a_extraer: string;
      ubicacion: string;
      fecha_inicial: string;
      fecha_fin_estimada: string;
      cantidad_etapas:number;
    }
  
    let proyecto: Proyecto = {
      mineral: '',
      cantidad_a_extraer: '',
      ubicacion:'',
      fecha_inicial: fecha.toLocaleDateString(),
      fecha_fin_estimada: fecha.toLocaleDateString(),
      cantidad_etapas:10
    };
  
    // Función para manejar el envío del formulario
    function registrarDato() {
      // Aquí iría la lógica para procesar los datos del formulario
      console.log('Registrando dato:', proyecto);
      alert("Se registró la configuracion inicial del proyecto")
      //goto();
    }
  </script>
  
  <form on:submit|preventDefault={registrarDato}>
    <h2>Configuracion Explotacion</h2>
  
    <label for="mineral">Mineral</label>
    <input id="mineral" bind:value={proyecto.mineral} />

    <label for="cantidad_a_extraer">Cantidad a extraer</label>
    <input id="cantidad_a_extraer" bind:value={proyecto.cantidad_a_extraer} />

    <label for="ubicacion">Ubicacion</label>
    <input id="ubicacion" bind:value={proyecto.ubicacion} />

    <label for="fecha_inicial">Fecha Inicial</label>
    <input id="fecha_inicial" bind:value={proyecto.fecha_inicial} />

    <label for="fecha_fin_estimada">Fecha Final (estimada)</label>
    <input id="fecha_fin_estimada" bind:value={proyecto.fecha_fin_estimada} />

    <label for="cantidad_etapas">Cantidad Etapas</label>
    <input id="cantidad_etapas" bind:value={proyecto.cantidad_etapas} />

    <button type="submit">Registrar configuracion inicial Proyecto</button>
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
  