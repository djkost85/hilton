<?php include("config.php"); ?>
<link href="../style.css" rel="stylesheet" type="text/css" />
<table width="400" border="0" align="center" cellpadding="5" cellspacing="0">
  <tr>
    <td colspan="2" align="center">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2" align="center">¿Está segura/o de que desea eliminar esta publicación?</td>
  </tr>
  <tr>
    <td width="205" align="right">
    <form action="eliminar.php" method="get" name="form1" id="form1">
    <input name="id" type="hidden" value="<?php $id=$_GET['id']; echo $id; ?>" />
    <input name="confirmo" type="hidden" value="si" />
    <input name="idioma" type="hidden" value="<?php echo $idioma; ?>" />
      <label>
        <input type="submit" name="button" id="button" value="SI" />
        </label>
        </form></td>
    <td width="195"><form action="index.php" method="get" name="form2" id="form2">
      <label>
      <input type="submit" name="button2" id="button2" value="NO" />
      </label>
        </form></td>
  </tr>
</table>
<?php $confirmo=$_GET['confirmo']; if ($confirmo=="si") {?>
<?php 
	include("../conectarse.php"); 
	$link=Conectarse(); 

	 
	mysql_query("delete from noticias where id = $id",$link); 
	mysql_close($link);
?>
<meta http-equiv="Refresh" content="0;URL=index.php" />
<?php }?>