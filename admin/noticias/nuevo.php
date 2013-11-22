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
      Titulo:<br>
      <input name="titulo" type="text" class="campoform" id="titulo">
      <br>
      <br>
      Copete:<br>
      <textarea name="copete" rows="10" class="campoform2" id="titulo2"></textarea>
<br>
      <br>
      Foto:<br>
      <label>
      <input type="file" name="imagen" id="imagen">
      </label>
      <br>
      <br>
      Titulo:<br>
      <label>
      <select name="tipo" id="select">
        <option value="General">General</option>
        <option value="Bmw">Bmw</option>
        <option value="Nissan">Nissan</option>
        <option value="Ducati">Ducati</option>
      </select>
      </label>
      <br>
      <br>
      Texto:<br>
<?php
    $oFCKeditor = new FCKeditor('texto') ;
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
      <label for="titulo"></label>
    </form>
  </div>
  
</div>
</body>
</html>