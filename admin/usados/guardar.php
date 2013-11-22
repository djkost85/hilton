<?php
    include("../conectarse.php"); 
	include("config.php");
    $link=Conectarse(); 

	$modelo=$_POST['modelo'];
	$marca=$_POST['marca'];
	$ano=$_POST['ano'];
	$precio=$_POST['precio'];
	$informacion=$_POST['informacion'];
	$tipo=$_POST[tipo];			
	
	include("Thumbnail_y.class.php");

	$img = $_FILES['imagen']['name']; // nombre
	
	$nombre_rand= date("d-m-Y-H-i-s");
	
	$uploaddir = $_SERVER['DOCUMENT_ROOT'] . "/fotos/usados/";
	$uploadfile = $uploaddir.$nombre_rand.".jpg";
	
	echo '<pre>';
	if (move_uploaded_file($_FILES['imagen']['tmp_name'], $uploadfile)) {
		echo "Datos actualizados - Un archivo subido\n";
	} else {
		echo "Datos actualizados - No se subieron archivos\n";
	}
	
	if(!empty($img)) { $imgthumb = $nombre_rand.".jpg"; }
	if(!empty($img)) { thumbjpeg($imgthumb,120); }

	mysql_query("insert into usados (modelo,marca,ano,precio,foto,informacion,tipo) values  ('$modelo','$marca','$ano','$precio','$imgthumb','$informacion','$tipo')",$link);
	mysql_close($link);
?>
<meta http-equiv="Refresh" content="0;URL=index.php" />