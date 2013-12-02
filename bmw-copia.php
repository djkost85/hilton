<script language="Javascript">
<!--
function Serie1Link() {
document.getElementById('Serie1').style.display = 'block'
document.getElementById('Serie3').style.display = 'none'

document.getElementById('Serie1').className = 'bmwLinksSelecOn'
document.getElementById('Serie3').className = 'bmwLinksSelecOff'
}
function Serie3Link() {
document.getElementById('Serie1').style.display = 'none'
document.getElementById('Serie3').style.display = 'block'

document.getElementById('Serie1').className = 'bmwLinksSelecOff'
document.getElementById('Serie3').className = 'bmwLinksSelecOn'
}

//-->
</script>
<link href="style.css" rel="stylesheet" type="text/css" />
<?php
	if(isset($_REQUEST['id'])){$id=$_REQUEST['id'];}else{$id='';}
	$serie1=mysql_query("SELECT * FROM nuevos WHERE serie='Serie 1' ORDER BY serie");
	$serie3=mysql_query("SELECT * FROM nuevos WHERE serie='Serie 3' ORDER BY serie");
	if(isset($id) && !empty($id)) 
	{
		$modelo=mysql_query("SELECT * FROM nuevos WHERE id='$id'");	
	} 
	else 
	{
		$modelo=mysql_query("SELECT * FROM nuevos WHERE marca='Bmw' ORDER BY RAND() LIMIT 0,1");
	}
?>
<script src="Scripts/AC_RunActiveContent.js" type="text/javascript"></script>
<div id="medio">
  <div class="seccionesFloat"><img src="img/brdlinea.png" width="98" height="31" hspace="23" align="right" /><strong>BMW</strong></div>
  <div id="bmwVideo<?php if($id=="") {} else { echo "2"; }?>"><div id="bmwLogo"><img src="img/bmw.png" alt="BMW" width="103" height="91" hspace="20" align="right" /><br />
      DEJATE LLEVAR<br />
    POR TUS SENTIMIENTOS</div>
    <?php if($id=="") { ?>
    <object data="swf/video.swf" type="application/x-shockwave-flash" width="320" height="180" hspace="100" vspace="20">
      <param name="movie" value="swf/video.swf" />
      <param name="wmode" value="transparent" />
      <img src="img/videodemo.jpg" alt="Flash Player no disponible" width="375" height="211" hspace="100" vspace="20"/>
    </object>
    <?php } else {  } ?>
    
  </div>
  <div id="bmwLinks">
    <div class="bmwLinksTitulo" id="sSerie1">SERIES</div>
    <div class="bmwLinksSelecOff" id="sSerie1"><a href="#" onMouseOver="Serie1Link()">Serie 1</a></div>
    <div class="bmwLinksSelecOff" id="sSerie3"><a href="#" onMouseOver="Serie3Link()">Serie 3</a></div>
  </div>
  <div id="bmwSubLinks">
    <div style="display:none" id="Serie1">
      <?php while ($row=mysql_fetch_array ($serie1)) {?>
      <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
      <?php } ?>
    </div>
    <div style="display:none" id="Serie3">
      <?php while ($row=mysql_fetch_array ($serie3)) {?>
      <a href="?mod=<?php echo $mod; ?>&amp;id=<?php echo $row['id']; ?>"><?php echo $row['modelo']; ?></a>
      <?php } ?>
    </div>
  </div>
  <?php while ($row=mysql_fetch_array ($modelo)) {?>
  <div id="bmwModelo"><?php echo $row['marca']; ?> <?php echo $row['serie']; ?> <?php echo $row['modelo']; ?></div>
  <div id="bmwFoto"><img src="fotos/nuevos/thumbs/<?php echo $row['foto']; ?>" align="right" /></div>
  <div id="bmwCaracteristicas">
    <h1>Caracter&Iacute;sticas</h1>
    <?php echo $row['caracteristicas']; ?> <br />
    <br />
    <a href="contacto/index.php?imail=ventas@hiltonmotors.com.uy&amp;asunto=Consulta por NUEVO Modelo <?php echo $row['modelo']; ?>" rel="facebox"><img src="img/btnConsulte.png" alt="Consulta" width="80" height="30" border="0" /></a></div>
  <div id="bmwDetalle">
    <h1>INFORMACI&Oacute;N DETALLADA</h1>
    <?php echo $row['detalle']; $idlink = $row['id'];?> </div>  <?php if ($row['versiones']!==''): ?>
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
  <?php } ?>
  <?php $galeria=mysql_query("SELECT * FROM fotos WHERE idlink='$idlink' and tipo='nuevos'");	 ?>
  <?php while ($row=mysql_fetch_array ($galeria)) {?>
  <div class="bmwMiniFoto"><a href="fotos/nuevos/<?php echo $row['foto']; ?>" rel="lightbox-"><img src="fotos/nuevos/thumbs/<?php echo $row['foto']; ?>" alt="miniFoto" height="85" width="130" border="0" /></a></div>
  <?php } ?>
</div>
