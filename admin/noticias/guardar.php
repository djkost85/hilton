<?php
    include("../conectarse.php"); 
	include("config.php");
    $link=Conectarse(); 

	$titulo=$_POST[titulo];
	$copete=$_POST[copete];
	$tipo=$_POST[tipo];
	$texto=$_POST[texto];
	
	include("Thumbnail_y.class.php");

	$img = $_FILES['imagen']['name']; // nombre
	
	$nombre_rand= date("d-m-Y-H-i-s");
	
	$uploaddir = $_SERVER['DOCUMENT_ROOT'] . "/fotos/noticias/";
	$uploadfile = $uploaddir.$nombre_rand.".jpg";
	
	echo '<pre>';
	if (move_uploaded_file($_FILES['imagen']['tmp_name'], $uploadfile)) {
		echo "Datos actualizados - Un archivo subido\n";
	} else {
		echo "Datos actualizados - No se subieron archivos\n";
	}
	
	if(!empty($img)) { $imgthumb = $nombre_rand.".jpg"; }
	if(!empty($img)) { thumbjpeg($imgthumb,128); }

	mysql_query("insert into noticias (titulo,copete,tipo,texto,foto) values  ('$titulo','$copete','$tipo','$texto','$imgthumb')",$link);
	mysql_close($link);
?>
<meta http-equiv="Refresh" content="0;URL=index.php" />