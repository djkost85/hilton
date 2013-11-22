<?php include("config.php"); ?>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $titulo; ?></title>
</head>
<?php 	
	include("../fckeditor/fckeditor.php");
	include("../../lista.php");
?>
<link href="../style.css" rel="stylesheet" type="text/css" />
<body>
<div class="titulos"><?php echo $titulo; ?></div>
<div class="contenedor">
  <?php include("../menu.html"); ?>
  <div class="contenidos">
    <form action="guardar.php" method="post" enctype="multipart/form-data" name="formulario">
      <label for="textfield"></label>
      Modelo:<br>
      <input name="modelo" type="text" class="campoform" id="modelo">
      <br>
      <br>
      Marca:<br>
      <label>
        <select name="marca" id="marca" OnChange="cambiar()">
          <option value="" selected="selected"></option>
          <option value="Bmw">Bmw</option>
          <option value="Nissan">Nissan</option>
          <option value="Ducati">Ducati</option>
          <option value="tri">Trimph</option>
        </select>
      </label>
      <br>
      <br>
      Serie:<br>
      <label>
        <select name="serie" id="serie">
          <option value="" selected=""></option>
        </select>
      </label>
      <br>
      <br>
      Foto:<br>
      <label>
        <input type="file" name="imagen" id="imagen">
      </label>
      <br>
      <br>
      Caracteristicas:<br>
      <?php
    $oFCKeditor = new FCKeditor('caracteristicas') ;
    $oFCKeditor->BasePath = '../fckeditor/';
 	$oFCKeditor->ToolbarSet='Basic';
    $oFCKeditor->Value = '';
    $oFCKeditor->Width = '550' ;
    $oFCKeditor->Height = '250' ;
    $oFCKeditor->Create() ;
?>
      <br>
      <br>
      Información:<br>
      <?php
    $oFCKeditor = new FCKeditor('detalle') ;
    $oFCKeditor->BasePath = '../fckeditor/';
 	$oFCKeditor->ToolbarSet='Basic';
    $oFCKeditor->Value = '';
    $oFCKeditor->Width = '550' ;
    $oFCKeditor->Height = '250' ;
    $oFCKeditor->Create() ;
?>
      <br>
      <br>
      Versiones (Ej: version,precio; version, precio; version,precio) sin ; al final:<br>
      <input name="versiones" type="text" class="campoform" id="versiones" >
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