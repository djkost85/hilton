<?php include("config.php"); ?><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $titulo; ?></title>
</head>

<?php
    include("../conectarse.php"); 
    $link=Conectarse(); 
    $consulta=mysql_query("SELECT * FROM usados ORDER BY id DESC");
?>

<link href="../style.css" rel="stylesheet" type="text/css" />

<body>
<div class="titulos"><?php echo $titulo; ?></div>
<div class="contenedor">
  <?php include("../menu.html"); ?>
  <div class="contenidos">
<div class="nuevo"><a href="nuevo.php">Nuevo</a></div>
<br>

<?php while ($row=mysql_fetch_array ($consulta)) {?>
        
<div class="lista"><a href="eliminar.php?id=<?php echo $row['id']; ?>">Eliminar</a> <a href="modificar.php?id=<?php echo $row['id']; ?>">Modificar</a> <a href="fotos.php?id=<?php echo $row['id']; ?>">Agregar fotos</a> [<?php echo $row['id']; ?>] <?php echo $row[tipo]; ?> - <?php echo $row['modelo']; ?></div>
 
<?php ;}?>  
 
  </div>
  
</div>
</body>
</html>