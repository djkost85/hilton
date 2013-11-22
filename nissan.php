<?php
	$id=$_REQUEST['id'];
	$nissan=mysql_query("SELECT * FROM nuevos WHERE marca='Nissan' ORDER BY modelo");
	if(isset($id) && !empty($id)) 
	{
		$modelo=mysql_query("SELECT * FROM nuevos WHERE id='$id'");	
	} 
	else 
	{
		$modelo=mysql_query("SELECT * FROM nuevos WHERE marca='Nissan' ORDER BY RAND() LIMIT 0,1");
	}
?>

<link href="style.css" rel="stylesheet" type="text/css" />

<div id="medio">
  <div id="nissanTitulo"></div>
  <div id="nissanPrincipal"></div>
  <div id="nissanMenu">
      <?php while ($row=mysql_fetch_array ($nissan)) {?>
      <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
      <?php } ?>  
  </div>
  <?php while ($row=mysql_fetch_array ($modelo)) {?>
  <div id="bmwModelo"><?php echo $row['marca']; ?> <?php echo $row['serie']; ?> <?php echo $row['modelo']; ?></div>
  <div id="nissanFotoPrincipal"><img src="fotos/nuevos/<?php echo $row['foto']; ?>" width="940" height="298" /></div>
  <div id="bmwCaracteristicas">
    <h1>Caracter&Iacute;sticas</h1>
	<?php echo $row['caracteristicas']; ?>
    <br />
    <br />
    <a href="contacto/index.php?imail=ventas@hiltonmotors.com.uy&amp;asunto=Consulta por NUEVO Modelo <?php echo $row['modelo']; ?>" rel="facebox"><img src="img/btnConsulte.png" alt="Consulte" width="80" height="30" border="0" /><br />
    <br />
    </a><a href="contacto/index.php?imail=ventas@hiltonmotors.com.uy&amp;asunto=Consulta por NUEVO Modelo <?php echo $row['modelo']; ?>" rel="facebox">    </a></div>
  <div id="bmwDetalle">
    <h1>INFORMACI&Oacute;N DETALLADA</h1>
	<?php echo $row['detalle']; $idlink = $row['id'];?>
  </div>
  
  <?php if ($row['versiones']!==''): ?>
  <div class="versiones_titulo">VERSIONES:</div>
  <div id="versiones">
  <?php 
  $versiones = explode(";",$row['versiones']);  
  $versiones_cant = count($versiones);
  
  for ($i = 0; $i < $versiones_cant; $i++)
  {
	  $vers = explode(",",$versiones[$i]);
	  echo '<div class="version">'.$vers[0].'</div><div class="precio">U$S '.$vers[1].'</div>';
  }
  ?>
  </div> 
  <?php endif;?>
   
  <div class="versiones_titulo">GALERÍA:</div>
  <?php $idlink = $row['id'];?>
  <?php } ?>
  <?php $galeria=mysql_query("SELECT * FROM fotos WHERE idlink='$idlink' and tipo='nuevos'");	 ?>
  <?php while ($row=mysql_fetch_array ($galeria)) {?>
  <div class="bmwMiniFoto"><a href="fotos/nuevos/<?php echo $row['foto']; ?>" rel="lightbox-"><img src="fotos/nuevos/thumbs/<?php echo $row['foto']; ?>" alt="miniFoto" height="85" width="130" border="0" /></a></div>
  <?php } ?>
</div>
