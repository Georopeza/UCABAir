<script>
    let idProducto='';
    let nombreMineral='';
    let tipoMineral = ['Metálico','No Metálico']; // Valor predeterminado
    let cantidad_a_registrar='';
    let unidadMedida = 'Toneladas/Metricas'; // Valor predeterminado
    let lugar_extraccion='';
    let empresa_extractora='';
    let precio='';
  
    // Función para manejar el envío del formulario
    function registrarMineral() {
      // Aquí iría la lógica para procesar los datos del formulario
      console.log('Registrando mineral:', { idProducto, nombreMineral, tipoMineral, cantidad_a_registrar, unidadMedida, lugar_extraccion,empresa_extractora,precio });
    }
  </script>
  
  <form on:submit|preventDefault={registrarMineral}>
    <h2>Registrar Mineral</h2>
    
    <label for="idProducto">ID de Producto</label>
    <input id="idProducto" bind:value={idProducto} />
  
    <label for="nombreMineral">Nombre del Mineral</label>
    <input id="nombreMineral" bind:value={nombreMineral} />
  
    <label for="tipoMineral">Tipo de mineral</label>
    <select id="tipoMineral" bind:value={tipoMineral}>
      <option value="Metálico">Metálico</option>
      <option value="No Metálico">No Metálico</option>
      <!-- Agrega más opciones según sea necesario -->
    </select>
  
    <label for="cantidadExtraer">Cantidad a extraer</label>
    <input id="cantidadExtraer" type="number" bind:value={cantidad_a_registrar} />
  
    <label for="unidadMedida">Unidad de medida</label>
    <select id="unidadMedida" bind:value={unidadMedida}>
      <option value="Toneladas/Metricas">Toneladas/Metricas</option>
      <!-- Agrega más opciones según sea necesario -->
    </select>
  
    <label for="LugarExtraccion">Lugar de Extraccion</label>
    <input id="LugarExtraccion" bind:value={lugar_extraccion} />
  
    <label for="EmpresaExtractora">Empresa Extractora</label>
    <input id="EmpresaExtractora" bind:value={empresa_extractora} />

    <label for="precio">Precio</label>
    <input id="precio" bind:value={precio} />

    <button type="submit">Registrar Mineral</button>
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
      display:flex;
      flex-direction: column;
    }
  
    /* Estilos para las etiquetas y campos de entrada */
    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }
  
    input,
    select {
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
  