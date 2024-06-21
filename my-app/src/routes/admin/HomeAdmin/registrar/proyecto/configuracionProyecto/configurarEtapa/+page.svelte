<script>
    import ConfigurarEtapa from '$lib/components/configurarEtapa.svelte'
    import ConfigurarActividad from '$lib/components/configurarActividad.svelte'
    import AgregarEmpleados from '$lib/components/agregarEmpleados.svelte';
    import AgregarMaquinaria from '$lib/components/agregarMaquinaria.svelte';

</script>

<body>
    <div class="ConfigurarEtapa">
        <h2>Configuracion Etapa</h2>
        <ConfigurarEtapa/>
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
        <button>Agregar Etapa</button>
    </div>    
</body>