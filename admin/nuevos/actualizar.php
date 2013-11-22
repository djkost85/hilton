<?php
    include("../conectarse.php"); 
	include("config.php");
    $link=Conectarse(); 
	
	$id=$_REQUEST['id'];
	
	$modelo=$_POST['modelo'];
	$marca=$_POST['marca'];
	$caracteristicas=$_POST['caracteristicas'];
	$detalle=$_POST['detalle'];
	$serie=$_POST['serie'];
	$versiones=$_POST['versiones'];
	
	include("Thumbnail_x.class.php");

	$img = $_FILES['imagen']['name']; // nombre
	
	$nombre_rand= date("d-m-Y-H-i-s");
	
	$uploaddir = $_SERVER['DOCUMENT_ROOT'] . "/fotos/nuevos/";
	$uploadfile = $uploaddir.$nombre_rand.".jpg";
	
	echo '<pre>';
	if (move_uploaded_file($_FILES['imagen']['tmp_name'], $uploadfile)) {
		echo "Datos actualizados - Un archivo subido\n";
	} else {
		echo "Datos actualizados - No se subieron archivos\n";
	}
	
	if(!empty($img)) { $imgthumb = $nombre_rand.".jpg"; }
	if(!empty($img)) { thumbjpeg($imgthumb,940); }
	
	
	$sql = "UPDATE nuevos SET modelo = '$modelo', marca = '$marca', caracteristicas = '$caracteristicas', detalle = '$detalle' , serie = '$serie' , versiones = '$versiones' ";
	
	if(isset($img) && !empty($img)){
		$sql .= ", foto = '$imgthumb'";
	}
	$sql .= " WHERE id='$id'";
	
	mysql_query($sql);
	
	mysql_close($link);
?>
<meta http-equiv="Refresh" content="0;URL=index.php" />