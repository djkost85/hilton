<?php include("config.php"); ?>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $titulo; ?></title>
</head>
<?php
    include("../conectarse.php"); 
    $link=Conectarse(); 
	$id=$_REQUEST['id'];
    $consulta=mysql_query("SELECT * FROM nuevos WHERE id='$id'");
	include("../fckeditor/fckeditor.php");
	include("../../lista.php");	
?>
<link href="../style.css" rel="stylesheet" type="text/css" />
<body>
<div class="titulos"><?php echo $titulo; ?></div>
<div class="contenedor">
  <?php include("../menu.html"); ?>
  <div class="contenidos">
    <?php while ($row=mysql_fetch_array ($consulta)) {?>
    <form action="actualizar.php?id=<?php echo $id ?>&idioma=<?php echo $idioma; ?>" method="post" enctype="multipart/form-data" name="formulario">
      <label for="textfield"></label>
      Modelo:<br>
      <input name="modelo" type="text" class="campoform" id="modelo" value="<?php echo $row['modelo']; ?>">
      <br>
      <br>
      Marca:<br>
      <label>
        <select name="marca" id="select" OnChange="cambiar()">
          <option value="<?php echo $row['marca']; ?>" selected="selected"><?php echo $row['marca']; ?></option>
          <option value="Bmw">Bmw</option>
          <option value="Nissan">Nissan</option>
          <option value="Ducati">Ducati</option>
        </select>
      </label>
      <br>
      <br>
      Serie:<br>
      <label>
        <select name="serie" id="serie">
          <option value="<?php echo $row['serie']; ?>" selected="selected"><?php echo $row['serie']; ?></option>
        </select>
      </label>
      <br>
      <br>
      Foto:<br>
      <label><img src="../../fotos/nuevos/thumbs/<?php echo $row['foto']; ?>"></label>
      <br>
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
    $oFCKeditor->Value = $row['caracteristicas'];
    $oFCKeditor->Width = '550' ;
    $oFCKeditor->Height = '250' ;
    $oFCKeditor->Create() ;
?>
      <br>
      <br>
      Detalle:<br>
      <?php
    $oFCKeditor = new FCKeditor('detalle') ;
    $oFCKeditor->BasePath = '../fckeditor/';
 	$oFCKeditor->ToolbarSet='Basic';
    $oFCKeditor->Value = $row['detalle'];
    $oFCKeditor->Width = '550' ;
    $oFCKeditor->Height = '250' ;
    $oFCKeditor->Create() ;
?>
      <br>
      <br>
      Versiones (Ej: version,precio; version, precio; version,precio;)  sin ; al final:<br>
      <input name="versiones" type="text" class="campoform" id="versiones" value="<?php echo $row['versiones']; ?>">
      <br>
      <br>
      <input type="submit" name="button" id="button" value="Guardar">
      <br>
      <label for="versiones"></label>
    </form>
    <?php ;}?>
  </div>
</div>
</body>
</html>