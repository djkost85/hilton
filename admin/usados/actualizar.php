<?php
    include("../conectarse.php"); 
	include("config.php");
    $link=Conectarse(); 
	
	$id=$_REQUEST['id'];
	
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
	if(!empty($img)) { thumbjpeg($imgthumb,128); }
	
	
	$sql = "UPDATE usados SET modelo = '$modelo', marca = '$marca', ano = '$ano', precio = '$precio', tipo = '$tipo' , informacion = '$informacion' ";
	
	if(isset($img) && !empty($img)){
		$sql .= ", foto = '$imgthumb'";
	}
	$sql .= " WHERE id='$id'";
	
	mysql_query($sql);
	
	mysql_close($link);
?>
<meta http-equiv="Refresh" content="0;URL=index.php" />