<script>
  let buscar='';
</script>
<header>
    <div class="CajaEncabezadoAdmin">
      <div class="Caja2">
        <div class="logo">
            <img src="/src/images/minerucab_logo.png" alt="minerucab Logo">
        </div>
        <div class="Admin">
            <a>Modulo De Administracion</a>
        </div>    
      </div>
    </div>
</header>

  <div class="Caja3">
  </div>
<div class="margenContenido">  
<slot/>
</div>
<style>


.margenContenido{
    margin:0 170px 0 170px;
}


.botonesCaja3{
  padding:14px;
  margin:0 0 0 170px;
  align-items: center;

}

.palabras{
  border-radius: 5px;
  font-style:bold;
  border-color: gainsboro;
}



header{
  position:static;
}

.Caja2{
  display:flex;
  justify-content: space-between;
  font-style: serif;
  align-items: center;
  margin:0 170px 0 170px;
}

.Caja3{
  background-color: rgb(31, 30, 30);
  width: 100%;
  height: 45px;
  font-style: bold;
}


.Usuario img{
  height:30px;
}

.logo{
  display:flex;
}

.logo img{
  height:50px;
}




</style>