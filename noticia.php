<link href="style.css" rel="stylesheet" type="text/css" />
<?php
	$id=$_REQUEST['id'];
    $noticia=mysql_query("SELECT * FROM noticias WHERE id='$id'");
?>
<?php while ($row=mysql_fetch_array ($noticia)) {?>
<div id="medio">
  <div class="secciones"><?php echo $row[titulo]; ?></div>
  <div class="texto"><?php /*?> <img src="fotos/noticias/<?php echo $row['foto']; ?>" hspace="10" align="right" /><?php */?> <strong><?php echo $row[copete]; ?></strong><br />
    <br />
    <?php echo $row[texto]; ?> </div><br />
<br />
<br />
<br />
<br />
<br />

</div>
<?php } ?>
