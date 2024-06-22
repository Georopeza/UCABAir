<script>
    import Modificar from '$lib/components/registrarMineral.svelte'
    /**
	 * @type {any}
	 */
    let id_mineral;
</script>

<body>
    <div class="RegistrarMineral">
        <Modificar bind:idProducto={id_mineral}/>
    </div>    
</body>