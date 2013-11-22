<?php 
$imail=$_REQUEST['id']imail];
$asunto=$_REQUEST['id']asunto];
$nombre=$_REQUEST['id']nombre];
$email=$_REQUEST['id']email];
$consulta=$_REQUEST['id']consulta];

if (!$nombre=="" && !$email=="" && !$consulta=="") { 
 
$body ='<table width="300" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><strong>Nombre:</strong></td>
  </tr>
  <tr>
    <td>'.$_REQUEST['id']"nombre"].'</td>
  </tr>

  <tr>
    <td><strong>Email:</strong></td>
  </tr>
  <tr>
    <td>'.$_REQUEST['id']"email"].'</td>
  </tr>
 
  <tr>
    <td><strong>Consulta:</strong></td>
  </tr>
  <tr>
    <td>'.$_REQUEST['id']"consulta"].'</td>
  </tr>
  
</table>';

$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html; charset=utf-8\r\n";
$header .= "From: ".$_REQUEST['id']'email']."\r\n";
$header .= "Bcc: marketing@hiltonmotoros.com.uy\r\n";
mail($imail,$asunto,$body,$header);

$envio="ok";

}
 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contacto</title>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<?php if(!$envio=="ok") {?> 
<form name="form1" method="post" action="contacto.php" rel="facebox">
<input name="imail" type="hidden" value="<?php echo $_REQUEST['id']imail]; ?>" />
<input name="asunto" type="hidden" value="<?php echo $_REQUEST['id']asunto]; ?>" />
<div id="contenedor">
  <div class="CeldaTexto">Nombre:</div>
  <div class="CeldaCampo">
    <label>
    <input name="nombre" type="text" class="Campo" id="nombre" />
    </label>
  </div>
  <div class="CeldaTexto">E-Mail:</div>
  <div class="CeldaCampo"><label><input name="email" type="text" class="Campo" id="email" />
  </label></div>
  <div class="CeldaTexto">Mensaje:</div>
  <div class="CeldaCampoMultiline">
    <label>
    <textarea name="consulta" class="CampoMultiline" id="consulta"></textarea>
  </label></div>    
  <div class="CeldaBoton">
    <label>
    <input name="button" type="submit" class="Boton" id="button" value="Enviar" />
    </label>
  </div>
</div>
</form>
<?php } else {?>
<div id="mensaje"><br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  Su mensaje fue enviado y sera procesado a la brevedad.<br />
  <br />
Gracias<br />
</div>
<?php }?>
</body>
</html>
