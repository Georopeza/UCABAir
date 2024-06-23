<script lang=ts>
    import ConfigurarActividad from '$lib/components/configurarActividad.svelte'
    import AgregarEmpleados from '$lib/components/agregarEmpleados.svelte';
    import AgregarMaquinaria from '$lib/components/agregarMaquinaria.svelte';
	import ConfigurarProyecto from '$lib/components/configurarProyecto.svelte';
</script>

<body>
    <div class="ConfigurarActividad">
        <h2>Agregar empleado</h2>
                <div class="AgregarEmpleados">
                    <AgregarEmpleados/>
                </div>
                <a href="/admin/HomeAdmin/registrar/proyecto/configuracionProyecto/configurarEtapa/configurarActividad/asignarEmpleado">
                    <button>Agregar Otro Empleado</button>
                </a> 
                <a href="/admin/HomeAdmin/registrar/proyecto/configuracionProyecto/configurarEtapa/configurarActividad/asignarMaquinaria">
                    <button>Agregar Maquinaria</button>
                </a>      
                <a href="/admin/HomeAdmin/proyectos">
                    <button>Terminado</button>
                </a>   
    </div>  
</body>

<style>
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