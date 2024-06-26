<script lang=ts>
    import ConfigurarActividad from '$lib/components/configurarActividad.svelte'
</script>

<body>
    <div class="ConfigurarActividad">
        <h2>Configurar Actividad</h2>
                <div class="AgregarEmpleados">
                    <ConfigurarActividad/>
                </div>
                <a href="/admin/HomeAdmin/registrar/proyecto/configuracionProyecto/configurarEtapa/configurarActividad/asignarEmpleado">
                    <button>Agregar Empleado</button>
                </a> 
                <a href="/admin/HomeAdmin/registrar/proyecto/configuracionProyecto/configurarEtapa/configurarActividad/asignarMaquinaria">
                    <button>Agregar Maquinaria</button>
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