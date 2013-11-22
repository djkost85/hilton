<?php $id=$_REQUEST['id']; ?>
<?php $idfoto=$_REQUEST['id']'idfoto']; ?>
<link href="../style.css" rel="stylesheet" type="text/css" />
<table width="400" border="0" align="center" cellpadding="5" cellspacing="0">
  <tr>
    <td colspan="2" align="center">&nbsp;</td>
  </tr>
  <tr>
    <td colspan="2" align="center">¿Está segura/o de que desea borrar esta foto?</td>
  </tr>
  <tr>
    <td width="205" align="right">
    <form action="borrar_foto.php" method="get" name="form1" id="form1">
    <input name="id" type="hidden" value="<?php echo $id; ?>" />
    <input name="idfoto" type="hidden" value="<?php echo $idfoto; ?>" />
    <input name="confirmo" type="hidden" value="si" />
      <label>
        <input type="submit" name="button" id="button" value="SI" />
        </label>
        </form></td>
    <td width="195"><form action="fotos.php?id=<?php echo $id; ?>" method="get" name="form2" id="form2">
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

	mysql_query("delete from fotos where id = $idfoto",$link); 
	mysql_close($link);
?>
<meta http-equiv="Refresh" content="0;URL=fotos.php?id=<?php echo $id; ?>" />
<?php }?>