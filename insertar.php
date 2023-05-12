<?php
include "conexion.php";
$conexion = conexion();
// Recuperamos los datos del formulario
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$email = $_POST["email"];

// Componemos la sentencia SQL
$ssql = "insert into cliente (nombre, apellido,email) values ('$nombre','$apellido','$email')";

// Ejecutamos la sentencia y comprobamos si ha ido bien
if($conexion->query($ssql)) {
  echo "<p>Registro insertado con éxito</p>";
} else {
  echo "<p>Hubo un error al ejecutar la sentencia de inserción: {$conexion->error}</p>";
}
$conexion->close();

?>
<p><a href="formulario.html">Volver al formulario</a></p>
