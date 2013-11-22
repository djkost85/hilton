<?php include("config.php"); ?><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $titulo; ?></title>
</head>
<?php 	include("../fckeditor/fckeditor.php"); ?>

<link href="../style.css" rel="stylesheet" type="text/css" />
<body>
<div class="titulos"><?php echo $titulo; ?></div>
<div class="contenedor">
  <?php include("../menu.html"); ?>
  <div class="contenidos">
    <form action="guardar.php" method="post" enctype="multipart/form-data" name="form1">
      <label for="textfield"></label>
      Modelo:<br>
      <input name="modelo" type="text" class="campoform" id="modelo">
      <br>
      <br>
      Marca:<br>
      <label>
      <select name="marca" id="tipo">
        <option value="General">General</option>
        <option value="Bmw">Bmw</option>
        <option value="Nissan">Nissan</option>
        <option value="Ducati">Ducati</option>
      </select>
      </label>
      <br>
      <br>
      Tipo:<br>
      <label>
      <select name="tipo" id="marca">
        <option value="Auto">Auto</option>
        <option value="Moto">Moto</option>
        <option value="Camioneta">Camioneta</option>
      </select>
      </label>
<br>
      <br>
      Año:<br>
      <label>
      <select name="ano" id="tipo2">
        <?php 
			for($i = date ("Y"); $i >= date ("Y") - 50; $i--)
			{
			  echo '<option value="'.$i.'">'.$i.'</option>';
			}
		?>
     </select>
      </label>
      <br>
      <br>
      Precio:<br>
      <input name="precio" type="text" class="campoform" id="titulo2">
      <br>
      <br>
      Foto:<br>
      <label>
      <input type="file" name="imagen" id="imagen">
      </label>
      <br>
      <br>
      Información:<br>
      <?php
    $oFCKeditor = new FCKeditor('informacion') ;
    $oFCKeditor->BasePath = '../fckeditor/';
 	$oFCKeditor->ToolbarSet='Basic';
    $oFCKeditor->Value = '';
    $oFCKeditor->Width = '640' ;
    $oFCKeditor->Height = '300' ;
    $oFCKeditor->Create() ;
?>
      <br>
      <br>
      <input type="submit" name="button" id="button" value="Guardar">
      <br>
      <label for="modelo"></label>
    </form>
  </div>
</div>
</body>
</html>