<?php
    include("../conectarse.php"); 
    $link=Conectarse(); 

	$id=$_REQUEST['id'];
	//$barrios=$_POST['barrios'];
	//$ambientes=$_POST['ambientes'];
	
	include("Thumbnail_y.class.php");
	$img = $_FILES['imagen']['name']; // nombre
	$nombre_rand= date($id."_d-m-Y-H-i-s");
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

	mysql_query("insert into fotos (foto,idlink,tipo) values  ('$imgthumb','$id','usados')",$link);
	mysql_close($link);
?>
<meta http-equiv="Refresh" content="0;URL=fotos.php?id=<?php echo $id ?>" />