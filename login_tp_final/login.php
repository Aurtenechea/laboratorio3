<?php
if(isset($_GET["usuario"]) &&  isset($_GET["pass"]))
{
	if( $_GET["usuario"] == "admin" &&  $_GET["pass"]== "1234")
	{
			echo "OK";
	}else{
			echo "Invalido";
	}
}
else if(isset($_POST["usuario"]) &&  isset($_POST["pass"]))
{
	if( $_POST["usuario"] == "admin" &&  $_POST["pass"]== "admin")
	{
			echo "OK";
	}else{
			echo "Invalido";
	}
}
?>