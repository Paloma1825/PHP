<!DOCTYPE html>
<html lang="es">
<head>
  <title>Insertar</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <script src="script.js" type="text/javascript"></script>
  <link rel="stylesheet" href="Estilos.css" type="text/css"/>

</head>
<body>
  <div>
    <h1>Insertar un registro</h1>
    <br>
    <form method="POST" action="insertar.php">
      <label for="Nombre">Nombre:</label><br>
      <input type="TEXT" id="nomid" name="nombre" class="campos" placeholder="Introduzca nombre" maxlength= "20" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}" value="" required onblur="ValidarNombre();"><br>
	  <span id="nomb"></span>
      <br>
      <label for="Apellido">Apellido:</label><br>
      <input type="TEXT" id= "apeid" name="apellido" class="campos" placeholder="Introduzca apellido" maxlength= "20" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}" value="" required onblur="ValidarApellido();"><br>
	  <span id="surname"></span>
	  <br>
	  <label for="Email">Email:</label><br>
      <input type="email" id="mail" name="email" class="campos" placeholder="Introduzca email" maxlength= "20" pattern ="[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$" value ="" required onblur="ValidarEmail();"><br>
	  <span id="correo"></span>
	  <br>
      <input type="SUBMIT" id="boton" value="Insertar" onclick="Enviar();">
	  <br>
    </form>
  </div>
</body>
</html>