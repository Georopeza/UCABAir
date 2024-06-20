<script>
import { goto } from '$app/navigation';
    async function handleSubmit(event) {
    event.preventDefault();
    // Aquí iría la lógica para verificar las credenciales de inicio de sesión
    // Si las credenciales son correctas, redirige al usuario
    goto('/admin/HomeAdmin');
  }
    let username='';
    let password='';

</script>
    <div class="cajaInicioSesion">
        <a>Ingrese con sus credenciales de inicio de sesion</a>
        <div class="cajaborde">
            <form on:submit={handleSubmit} class='cajachica'>
                <label class='palabras' style="margin-top: 5%;" for='username'>Correo Electronico:</label>
                <input class='palabras' id='username' name='username' type='text' placeholder="Usuario"/>

                <label class='palabras' style="margin-top: 5%;" for='password'>Contraseña:</label>
                <input class='palabras' id='password' name='password' type='password' placeholder="*********" />

                <button type='submit' class="ingresar">Ingresar</button>
            </form>
        </div>
    </div>
    







<style>


    .form-label{
        margin-top: 5%;
    }
    input{
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
        color: black;
    }
    h1{
        font-size: 100px;
        text-align: center;

    }
    .ingresar{
        background-color:black;
        border-radius: 25px;
        margin-top: 5%;
        justify-self:right;
        color: white;
        width: 100px;
        height:40px;
        font-size: 15px;
        font-weight: bold;
    }
    .titulocaja{
        flex-direction: column;
        justify-content: center;
    }
    .cajaInicioSesion{
        margin:100px;
        width: 90%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        height: 300px;
    
    }
    .cajaborde{
        background-color: white;
        width: 300px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        height: 440px;
    }
    input{
        align-self: center;
        width: 400px;
        border-radius: 10px;

    }
    .palabras{
        align-self: flex-start;
        font-family: 'Courier New', Courier, monospace;
    }

     .cajachica{
        width: 500px;
        display:flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: black;
        color: black;
        border-radius: 40px;
        height: 100px;
    }

</style>