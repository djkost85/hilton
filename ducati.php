<link href="style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
#ducatiMenu2 {
	height: 14px;
	width: 727px;
	float: left;
	font-size: 130%;
	font-weight: bold;
	padding-left: 19px;
	padding-top: 20px;
	margin-top: 4px;
}
#ducatiMenu2 * {
	list-style: none;
	margin: 0px;
	padding: 0px;
}
#ducatiMenu2 ul li {
	float: left;
	position: relative;
}
#ducatiMenu2 ul li a {
	color: #FFF;
	text-decoration: none;
	margin-right: 12px;
	background-color: transparent;
}
#ducatiMenu2 ul li a:hover {
	color: #CC0000;
	text-decoration: underline;
}
#ducatiMenu2 ul li:hover > ul {
	display: block;
}
#ducatiMenu2 ul li ul {
	width: 400px;
	display: none;
	float: left;
	position: absolute;
	padding-top: 14px;
}
#ducatiMenu2 ul li ul li {
	float: left;
}
#ducatiMenu2 ul li ul li a {
	float: left;
	font-size: 11px;
}
#ducatiMenu2 ul li ul li a:hover {
}
</style>
<?php
	$id=$_REQUEST['id'];
	$Multistrada=mysql_query("SELECT * FROM nuevos WHERE serie='Multistrada' ORDER BY serie");
	$Monster=mysql_query("SELECT * FROM nuevos WHERE serie='Monster' ORDER BY serie");
	$Superbike=mysql_query("SELECT * FROM nuevos WHERE serie='Superbike' ORDER BY serie");
	$Hypermotard=mysql_query("SELECT * FROM nuevos WHERE serie='Hypermotard' ORDER BY serie");
	$Streetfighter=mysql_query("SELECT * FROM nuevos WHERE serie='Streetfighter' ORDER BY serie");
	$Panigale=mysql_query("SELECT * FROM nuevos WHERE serie='Panigale' ORDER BY serie");
	$Hyperstrada=mysql_query("SELECT * FROM nuevos WHERE serie='Hyperstrada' ORDER BY serie");
	$Diavel=mysql_query("SELECT * FROM nuevos WHERE serie='Diavel Dark' ORDER BY serie");
	if(isset($id) && !empty($id)) 
	{
		$modelo=mysql_query("SELECT * FROM nuevos WHERE id='$id'");	
	} 
	else 
	{
		$modelo=mysql_query("SELECT * FROM nuevos WHERE marca='Ducati' ORDER BY RAND() LIMIT 0,1");
	}
?>
<div id="medio">
  <div id="ducatiCabezal">
    <div id="ducatiTitulo"></div>
    <div id="ducatiMenu2">
      <ul>
        <li> <a href="#">Monster</a>
          <ul>
            <li>
              <?php while ($row=mysql_fetch_array ($Monster)) {?>
              <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
              <?php } ?>
            </li>
          </ul>
        </li>
        <li><a href="#">Superbike</a>
          <ul>
            <li>
              <?php while ($row=mysql_fetch_array ($Superbike)) {?>
              <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
              <?php } ?>
            </li>
          </ul>
        </li>
        <li><a href="#">Multistrada</a>
          <ul>
            <li>
              <?php while ($row=mysql_fetch_array ($Multistrada)) {?>
              <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
              <?php } ?>
            </li>
          </ul>
        </li>
        <li><a href="#">Hypermotard</a>
          <ul>
            <li>
              <?php while ($row=mysql_fetch_array ($Hypermotard)) {?>
              <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
              <?php } ?>
            </li>
          </ul>
        </li>
        <li><a href="#">Streetfighter</a>
          <ul>
            <li>
              <?php while ($row=mysql_fetch_array ($Streetfighter)) {?>
              <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
              <?php } ?>
            </li>
          </ul>
        </li>
        <li><a href="#">Panigale</a>
          <ul>
            <li>
              <?php while ($row=mysql_fetch_array ($Panigale)) {?>
              <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
              <?php } ?>
            </li>
          </ul>
        </li>
        <li><a href="#">Hyperstrada</a>
          <ul>
            <li>
              <?php while ($row=mysql_fetch_array ($Hyperstrada)) {?>
              <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
              <?php } ?>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li><a href="#">Diavel Dark</a>
          <ul>
            <li>
              <?php while ($row=mysql_fetch_array ($Diavel)) {?>
              <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
              <?php } ?>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div id="ducatiLogo"></div>
  <?php while ($row=mysql_fetch_array ($modelo)) {?>
  <style type="text/css">
	<!--
	#ducatiFoto{
		height: 437px;
		width: 898px;
		float: left;
		background-image: url(fotos/nuevos/<?php echo $row['foto']; ?>);
	}
	-->
	</style>
  <div id="ducatiFotoFondo">
    <div id="ducatiFoto">
      <div id="ducatiCaracteristicas">
        <h1><?php echo $row['modelo']; ?></h1>
        <h2>Caracter&iacute;sticas</h2>
        <?php echo $row['caracteristicas']; ?><br />
        <br />
        <a href="contacto/index.php?imail=ventas@hiltonmotors.com.uy&amp;asunto=Consulta por NUEVO Modelo <?php echo $row['modelo']; ?>" rel="facebox"><img src="img/btnConsulte.png" alt="Consulte" width="80" height="30" border="0" /></a> <br />
        <br />
        <?php echo $row['detalle']; ?> </div>
    </div>
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
  <div id="ducatiGaleria">
    <?php while ($row=mysql_fetch_array ($galeria)) {?>
    <div class="ducatiMiniFoto"> <a href="fotos/nuevos/<?php echo $row['foto']; ?>" rel="lightbox-"><img src="fotos/nuevos/thumbs/<?php echo $row['foto']; ?>" alt="miniFoto" height="85" width="130" border="0" /></a> </div>
    <?php } ?>
  </div>
  <div id="ducatiPie"></div>
</div>
