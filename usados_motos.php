<link href="style.css" rel="stylesheet" type="text/css" />
<?php
	$_pagi_sql = "SELECT * FROM usados WHERE tipo='Moto' ORDER BY id DESC";
	$_pagi_cuantos = 12;
	include("paginator.inc.php");
	$_pagi_nav_num_enlaces = 12;
?>
<div id="medio">
<div id="venta">
      <div class="secciones">Usados seleccionados</div>
      
      <?php while ($row=mysql_fetch_array ($_pagi_result)) {?>
      <div class="productos">
        <div class="productos_a"><strong><?php echo $row['modelo']; ?></strong></div>
        <div class="productos_b">(<?php echo $row['marca']; ?>)</div>
        <div class="productos_foto"><img src="fotos/usados/thumbs/<?php echo $row['foto']; ?>" width="201" height="128" /></div>
        <div class="productos_1"><?php if ($row['precio']=="") { } else { echo "U$S ";} ?><?php echo $row['precio']; ?></div>
        <div class="productos_2"><a href="?mod=usado&amp;id=<?php echo $row['id']; ?>">[Más información]</a></div>
    </div>
      <?php } ?> 
      <div id="indice"><?php echo $_pagi_navegacion; ?></div>
    </div>
</div>