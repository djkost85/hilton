<?php include("config.php"); ?><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $titulo; ?></title>
</head>

<?php
    include("../conectarse.php"); 
    $link=Conectarse(); 
	
	$id=$_REQUEST['id'];

    $consulta=mysql_query("SELECT * FROM fotos WHERE idlink='$id' and tipo='usados'");
?>

<link href="../style.css" rel="stylesheet" type="text/css" />

<body>
<div class="titulos"><?php echo $titulo; ?></div>
<div class="contenedor">
  <?php include("../menu.html"); ?>
  <div class="menufotos"><a href="index.php">[Volver]</a> | <a href="agregar_foto.php?id=<?php echo $id; ?>">[Agregar foto]</a></div>
  <div class="contenidos">
     <?php while ($row=mysql_fetch_array ($consulta)) {?>
    <div class="foto"><img src="/fotos/usados/thumbs/<?php echo $row['foto']; ?>"><br>
      <a href="borrar_foto.php?idfoto=<?php echo $row['id']; ?>&id=<?php echo $id; ?>">[Borrar foto]</a></div>
  <?php ;}?> 
  </div>
  
</div>
</body>
</html>