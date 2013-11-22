<?php include("config.php"); ?><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $titulo; ?></title>
</head>
<?php
    include("../conectarse.php"); 
    $link=Conectarse(); 
	$id=$_REQUEST['id'];
    $consulta=mysql_query("SELECT * FROM usados WHERE id='$id'");
	include("../fckeditor/fckeditor.php");
?>
<link href="../style.css" rel="stylesheet" type="text/css" />
<body>
<div class="titulos"><?php echo $titulo; ?></div>
<div class="contenedor">
  <?php include("../menu.html"); ?>
  <div class="contenidos">
  <?php while ($row=mysql_fetch_array ($consulta)) {?>
    <form action="actualizar.php?id=<?php echo $id ?>&idioma=<?php echo $idioma; ?>" method="post" enctype="multipart/form-data" name="form1">
      <label for="textfield"></label>
      Modelo:<br>
      <input name="modelo" type="text" class="campoform" id="modelo" value="<?php echo $row['modelo']; ?>">
      <br>
      <br>
      Marca:<br>
      <label>
      <select name="marca" id="select">
        <option value="<?php echo $row['marca']; ?>"><?php echo $row['marca']; ?></option>
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
       <option value="<?php echo $row[tipo]; ?>"><?php echo $row[tipo]; ?></option>
        <option value="Auto">Auto</option>
        <option value="Moto">Moto</option>
        <option value="Camioneta">Camioneta</option>
      </select>
      </label>
<br>
      <br>
      Año:<br>
      <label>
      <select name="ano" id="tipo">
        <option value="<?php echo $row['ano']; ?>"><?php echo $row['ano']; ?></option>
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
      <input name="precio" type="text" class="campoform" id="titulo2" value="<?php echo $row['precio']; ?>">
<br>
      <br>      
      Foto:<br>
      <label><img src="../../fotos/usados/thumbs/<?php echo $row['foto']; ?>"></label>
      <br>
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
    $oFCKeditor->Value = $row['informacion'];
    $oFCKeditor->Width = '400' ;
    $oFCKeditor->Height = '200' ;
    $oFCKeditor->Create() ;
?>
<br>
      <br>
      <input type="submit" name="button" id="button" value="Guardar">
<br>
      <label for="modelo"></label>
    </form><?php ;}?> 
  </div>
  
</div>
</body>
</html>