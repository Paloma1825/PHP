function Enviar(){

  if (document.getElementById('nomid').value=="" && document.getElementById('apeid').value=="" && document.getElementById('mail').value=="" )
  {
	  
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
  }
  
  else if (document.getElementById('nomid').value=="" && document.getElementById('apeid').value==""){
	  
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
  }
  else if (document.getElementById('apeid').value=="" && document.getElementById('mail').value==""){
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
  }
  
  else if (document.getElementById('nomid').value=="" && document.getElementById('mail').value=="")
  {
	  document.getElementById('surname').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
  }

  else if(document.getElementById('nomid').value=="")
  {
	  document.getElementById('surname').innerHTML="";
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('nomb').innerHTML="Rellene el campo nombre";
	  document.getElementById("nomb").style.color = "red";
  }
  
  else if (document.getElementById('apeid').value==""){
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('correo').innerHTML="";
	  document.getElementById('surname').innerHTML="Rellene el campo apellido";
	  document.getElementById("surname").style.color = "red";
  }
  
  else if (document.getElementById('mail').value==""){
	  document.getElementById('nomb').innerHTML="";
	  document.getElementById('surname').innerHTML="";
	  document.getElementById('correo').innerHTML="Rellene el campo email";
	  document.getElementById("correo").style.color = "red";
  }

  
 }
function ValidarNombre()
{
	Nombre=document.getElementById('nomid').value;
    var validarNombre = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}/;
	
	if(!validarNombre.test(Nombre)){
       document.getElementById('nomb').innerHTML="El nombre no es correcto";
       document.getElementById("nomb").style.color = "red";
	}
	else{
		document.getElementById('nomb').innerHTML="";
	
	}		
}

function ValidarApellido(){
	
	Apellido=document.getElementById('apeid').value;
	var validarApellido = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,}/;
	
	if(!validarApellido.test(Apellido)){
       document.getElementById('surname').innerHTML="El apellido no es correcto";
       document.getElementById("surname").style.color = "red";
	}
	else{
		document.getElementById('surname').innerHTML="";
	
	}

}

function ValidarEmail(){
	
	Email = document.getElementById('mail').value;
	var validarEmail = /^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;
	
	if(!validarEmail.test(Email)){
       document.getElementById('correo').innerHTML="El email no es correcto";
       document.getElementById("correo").style.color = "red";
	}
	else{
		document.getElementById('correo').innerHTML="";
	
	}	
}

