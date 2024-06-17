<script>
  let categories = [
    { id: '/admin/clientes', name: 'Clientes' },
    { id: '/admin/empleado', name: 'Empleados' },
    { id: '/admin/inventario', name: 'Inventario' },
    { id: '/admin/proveedores', name: 'Proveedores' },
    { id: '/admin/proyectos', name: 'Proyectos' }
  ];
</script>
<div class="ModuloAdministracion">
    <div class="ModuloAdministracionHeader">
        <div class="logo">
            <img src="/src/images/icono.png" alt="minerucab Logo">
            <img src="/src/images/flecha.png" alt="flecha">
        </div>
    </div>
    <div class="categorias">
        <a>Administrar</a>    
            <nav>
                <ul>
                    {#each categories as category}
                        <li><a href={`/${category.id}`}>{category.name}</a></li>
                    {/each}
                </ul>
            </nav>
    </div>
</div>
<style>

.ModuloAdministracion{
    display:flex;
    flex:column;
}

.ModuloAdministracionHeader{
    display:flex;
    position: absolute;
    width: 42px;
    height: 46px;
    left: 300px;
    top: 363px;
}

.logo{

}

.categorias{
    
    margin-right:800px;
    margin-top:50px;
}
nav ul {
    list-style: none;
    padding: 0;
}

nav li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
}
  
nav li:last-child {
    border-bottom: none;
}

nav a {
    text-decoration: none;
    color: #333;
}
</style>
