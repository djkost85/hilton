<link href="style.css" rel="stylesheet" type="text/css" />
<?php
	$id=$_REQUEST['id'];
    $noticia=mysql_query("SELECT * FROM usados WHERE id='$id'");
?>
<div id="medio">
  <div class="secciones">Usados seleccionados</div>
  <div class="texto">
    <?php while ($row=mysql_fetch_array ($noticia)) {?>
    <div id="usadosFoto"><a href="fotos/usados/<?php echo $row['foto']; ?>" rel="lightbox-"><img src="fotos/usados/thumbs/<?php echo $row['foto']; ?>" width="201" height="128" border="0" align="right" /></a></div>
    <div id="usadosTitulo"><?php echo $row['modelo']; ?></div>
    <div id="usadosTexto"><?php echo $row['informacion']; ?><br />
      <?php $idlink = $row['id'];?>
      <br />
      <a href="contacto/index.php?imail=ventas@hiltonmotors.com.uy&amp;asunto=Consulta por usado ID <?php echo $row['id']; ?>" rel="facebox">Consultar por este producto</a></div>
    <?php } ?>
    <div id="usadosGaleria">
      M&aacute;s fotos:<br />
      <?php $galeria=mysql_query("SELECT * FROM fotos WHERE idlink='$idlink' and tipo='usados'");	 ?>
      <?php while ($row=mysql_fetch_array ($galeria)) {?>
      <a href="fotos/usados/<?php echo $row['foto']; ?>" rel="lightbox-"><img src="fotos/usados/thumbs/<?php echo $row['foto']; ?>" alt="miniFoto" height="85" width="130" border="0" /></a>
      <?php } ?>
    </div>
  </div>
</div>
