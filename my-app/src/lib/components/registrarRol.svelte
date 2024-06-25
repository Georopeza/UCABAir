<script lang=ts>
	import { goto } from "$app/navigation";

      // Interfaz para representar un empleado
      interface Rol {
            rol:string;
            descripcion:string;
      }
    
    let rol: Rol = {
        rol:"admin",
        descripcion:"Administrador del sistema"
      };
    
      // Función para manejar el envío del formulario
      function registrarRol() {
        // Aquí iría la lógica para procesar los datos del formulario
        console.log('Registrando rol:', rol);
        alert('Rol agregado con exito');
        goto("/admin/HomeAdmin/roles");
    }
    </script>
    
    <form on:submit|preventDefault={registrarRol}>
      <h2>Registrar Rol</h2>
    
      <label for="rol">Rol</label>
      <input id="rol" bind:value={rol.rol} />
  
      <label for="descripcion">Descripcion</label>
      <input id="descripcion" bind:value={rol.descripcion} />
    
      <button type="submit">Registrar Rol</button>
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
    