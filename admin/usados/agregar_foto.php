<?php include("config.php"); ?><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $titulo; ?></title>
</head>

<?php
	$id=$_REQUEST['id'];
?>

<link href="../style.css" rel="stylesheet" type="text/css" />

<body>
<div class="titulos"><?php echo $titulo; ?></div>
<div class="contenedor">
  <?php include("../menu.html"); ?>
  <div class="contenidos">
  
    <form action="guardar_foto.php?id=<?php echo $id; ?>" method="post" enctype="multipart/form-data" name="form1">
      Foto:<br>
      <label>
      <input type="file" name="imagen" id="imagen">
      </label>
      <br>
      <br>
      <input type="submit" name="button" id="button" value="Agregar foto">
<br>

    </form>
  </div>
  
</div>
</body>
</html>