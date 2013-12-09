<?php 
function Conectarse() 
{ 
   if (!($link=mysql_connect("bruno_server","root","FABO"))) 
  // if (!($link=mysql_connect("localhost","hiltonmo_admin","sU3ud2Er4b"))) 
   { 
      echo "Error conectando a la base de datos."; 
      exit(); 
   } 
   if (!mysql_select_db("hiltonmo_motors",$link)) 
   { 
      echo "Error seleccionando la base de datos."; 
      exit(); 
   } 
   return $link; 
} 
?>