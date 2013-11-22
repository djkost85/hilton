<?php 
include("admin/conectarse.php");
$link=Conectarse();
if(isset($_REQUEST['mod'])){
  $mod = $_REQUEST['mod'];}
else{$mod="";}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html xmlns:fb="http://ogp.me/ns/fb#">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Hilton Motors Co.</title>
<meta name="description" content="Representante oficial de las marcas BMW, Nissan y Ducati. Ventas de nuevos y usados.">
<meta name="keywords" content="BMW, Nissan, , automotora, Ducati, autos, ventas, nuevos, usados.">
<meta name="city" content="Montevideo">
<meta name="country" content="Uruguay">
<meta name="state" content="Montevideo">

<link href="style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="slimbox/js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="slimbox/js/slimbox2.js"></script>
<script src="Scripts/AC_RunActiveContent.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery.js?ver=1.3.2"></script>
<script type="text/javascript" src="js/jquery.aslideshow.js"></script>
<script src="facebox/facebox.js" type="text/javascript"></script>
<script type="text/javascript"> 
    jQuery(document).ready(function($) {
      $('a[rel*=facebox]').facebox({
        loadingImage : 'facebox/loading.gif',
        closeImage   : 'facebox/closelabel.png'
      })
    })
</script>
<script type="text/javascript"> 
// link for shortcut icon
HtmlLink hlinkIcon = new HtmlLink();
hlinkIcon.Attributes.Add("href", this.ResolveUrl("~/favicon.ico"));
hlinkIcon.Attributes.Add("rel", "SHORTCUT ICON");
hlinkIcon.Attributes.Add("ID", @"LinkIcon1");
this.Header.Controls.Add(hlinkIcon);
</script>

<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="favicon.ico"/>
<link rel="shortcut icon" href="http://www.hiltonmotors.com.uy/favicon.ico" type="image/x-icon"/>

<link href="facebox/facebox.css" media="screen" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="slimbox/css/slimbox2.css" type="text/css" media="screen" />
<link href="js/jquery.aslideshow/simple/styles.css" media="screen" rel="stylesheet" type="text/css" />
</head>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

<script language="Javascript">
<!--
function linkOn() 
{
document.getElementById('menu1').style.display = 'none'
document.getElementById('menu2').style.display = 'block'
}
function linkOff() 
{
document.getElementById('menu1').style.display = 'block'
document.getElementById('menu2').style.display = 'none'
}
function bannerOff() 
{
document.getElementById('bannerflotante').style.display = 'none'
}
//-->
</script>
<?php include_once("analyticstracking.php") ?>
<body>
<?php if($mod=="") {  ?>
<div class="bannerflotante" id="bannerflotante"><div class="bannerflotante_img"><a onclick="bannerOff()" href="#"><img src="img/btn_cerrar.gif" width="16" height="16" hspace="10" vspace="10" border="0" /></a></div></div>
<?php } ?>
<div id="contenedor">
  <div id="menuSuperiorInicio"><a href="?mod=principal">Inicio</a>
    <?php if ($mod=="") { echo ""; }?>
    <?php if ($mod=="bmw") { echo " / Bmw"; }?>
    <?php if ($mod=="nissan") { echo " / Nissan"; }?>
    <?php if ($mod=="ducati") { echo " / Ducati"; }?>
    <?php if ($mod=="acercadenosotros") { echo " / Acerca de nosotros"; }?>
    <?php if ($mod=="noticia") { echo " / Noticia"; }?>
    <?php if ($mod=="usados") { echo " / Usados seleccionados"; }?>
  </div>
  <div id="menuSuperiorContacto"><a href="contacto/index.php?imail=ventas@hiltonmotors.com.uy&amp;asunto=Contacto para Hilton Motors Co." rel="facebox">Contácto</a></div>
  <div id="logoHilton"><a href="?mod=principal"><img src="img/transparente.gif" width="323" height="37" vspace="30" border="0" /></a></div>
  
  <div id="menuPrincipal">
    <a href="?mod=acercadenosotros">Acerca de nosotros</a>
    <a href="?mod=bmw">BMW</a> <a href="?mod=nissan">Nissan</a>
    <a href="?mod=ducati">Ducati</a>
  </div>
    
    <div id="menu1" onMouseOver="linkOn()" >
        <div id="menuPrincipal2">
        <a href="#">Usados seleccionados</a>        </div>
  </div>
    
    <div id="menu2" onMouseOut="linkOff()" style="display:none">
        <div id="menuPrincipal2">
        <a href="#">Usados seleccionados</a>
        </div>
        <div id="menuSubrubro">
        <a href="?mod=usados"> Autos</a><img src="img/transparente.gif" width="10" height="10" border="0" />
        <a href="?mod=usados_motos"> Motos</a>
        </div>
  </div>
    
  <?php
	 $mod = htmlspecialchars($mod);
	 $mod = trim($mod);
	 if(!$mod){
		include("principal.php");
	 }else{
		 $file = $carpeta.$mod.".php";
		if(file_exists($file)){
			include($file);
		}else{
			echo "La seccion a la cual intenta acceder no existe.";
		}
	 }
  ?>
  <div id="pieMenu"><a href="?mod=acercadenosotros">Sobre nosotros</a><img src="img/transparente.gif" alt="separador" width="30" height="10" /> |<img src="img/transparente.gif" alt="separador" width="30" height="10" /> <a href="?mod=bmw">BMW</a> <img src="img/transparente.gif" alt="separador" width="30" height="10" />|<img src="img/transparente.gif" alt="separador" width="30" height="10" /> <a href="?mod=nissan">Nissan</a><img src="img/transparente.gif" alt="separador" width="30" height="10" />|<img src="img/transparente.gif" alt="separador" width="30" height="10" /> <a href="?mod=ducati">Ducati</a><img src="img/transparente.gif" alt="separador" width="30" height="10" />|<img src="img/transparente.gif" alt="separador" width="30" height="10" /> <a href="?mod=usados">Usados seleccionados</a></div>
</div>
<div id="pie">
  <div align="center"><a href="index.php"><img src="img/logo.png" vspace="18" border="0" /></a><br />
    Ejido 1572/76  |  Tel.: 2903 0733 / 34 / 37   |  Fax: 2903 0738  |  hilton@hiltonmotors.com.uy</div>
</div>
<div style="width:100%;text-align:center; float:left;"><a href="http://indeed.com.uy"><img src="http://indeed.com.uy/img/indeed.png" hspace="5" vspace="5" border="0" /></a></div>

</body>
</html>
<?php mysql_close($link); ?>
