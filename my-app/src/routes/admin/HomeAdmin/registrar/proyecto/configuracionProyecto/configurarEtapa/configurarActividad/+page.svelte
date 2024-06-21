<script>
    import ConfigurarActividad from '$lib/components/configurarActividad.svelte'
    import AgregarEmpleados from '$lib/components/agregarEmpleados.svelte';
    import AgregarMaquinaria from '$lib/components/agregarMaquinaria.svelte';
</script>

<body>
    <div class="ConfigurarActividad">
        <h2>Configuracion Actividad</h2>
            <ConfigurarActividad/>
                <div class="AgregarEmpleados">
                    <AgregarEmpleados/>
                </div>
                <div class="AgregarMaquinaria">
                    <AgregarMaquinaria/>
                </div>
    </div>  
</body>