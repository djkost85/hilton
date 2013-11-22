<link href="style.css" rel="stylesheet" type="text/css" />
<?php
    $noticia=mysql_query("SELECT * FROM noticias ORDER BY id DESC LIMIT 0,1");
	$noticias=mysql_query("SELECT * FROM noticias ORDER BY id DESC LIMIT 1,10");
	$usados_autos=mysql_query("SELECT * FROM usados WHERE tipo!= 'Moto' ORDER BY id DESC LIMIT 0,4");
	$usados_motos=mysql_query("SELECT * FROM usados WHERE tipo = 'Moto' ORDER BY id DESC LIMIT 0,4");
?>
<div id="medio">
  <div id="fotoPrincipal">
    <!--Foto Principal-->
    <div id="CustomSlideshow2"> <a href="img/principal/banner_juke.jpg" name="http://www.hiltonmotors.com.uy/?mod=bmw"></a> <a href="img/principal/banner_note.jpg" name="http://www.hiltonmotors.com.uy/?mod=nissan"></a> <a href="img/principal/Hilton_Ducati.jpg" name="http://www.hiltonmotors.com.uy/?mod=ducati"></a> <a href="img/principal/banner sentra.jpg" name="http://www.hiltonmotors.com.uy/?mod=nissan"></a> </div>
    <script type="text/javascript">
            //<![CDATA[
            $(document).ready(function(){
                $('#CustomSlideshow2').slideshow({
                playframe:false,
                width:940,
                height:397,
                imgresize:true,
                panel:true,
                title:false,
                imgajax:true,
                imglink:true,
                time:5000,
                controls :{
				first:false,
                hide:false,
				last:false,
                }
                }).playSlide();
            });
            //]]>
            </script>
  </div>
  <div class="marcas">
    <div class="marcasTitulo">BMW</div>
    <div class="marcasFoto"><a href="?mod=bmw"><img src="img/marcas/fotoBmw.jpg" width="294" height="169" border="0" /></a></div>
    <div class="marcasTexto"><a href="?mod=bmw">BMW</a><br />
      DEJATE LLEVAR POR TUS SENTIMIENTO.<br />
      Nuestros 43 años junto a la marca nos permiten tener modelos exclusivos para Uruguay.</div>
  </div>
  <div class="marcas">
    <div class="marcasTitulo">Nissan</div>
    <div class="marcasFoto"><a href="?mod=nissan"><img src="img/marcas/fotoNissaan.jpg" width="294" height="169" border="0" /></a></div>
    <div class="marcasTexto"><a href="?mod=nissan">NISSAN<br />
      </a>SI TE MUEVE IR POR MAS, LO TUYO ES UN NISSAN
      Somos Concesionario Oficial Nissan, disponemos de toda la línea 0km con modelos exclusivos de Hilton Motors Co.</div>
  </div>
  <div class="marcas">
    <div class="marcasTitulo">Ducati</div>
    <div class="marcasFoto"><a href="?mod=ducati"><img src="img/marcas/fotoDucati.jpg" width="294" height="169" border="0" /></a></div>
    <div class="marcasTexto"><a href="?mod=ducati">DUCATI</a> <br />
      IMPORTADORES Y DISTRIBUIDORES EXCLUSIVOS EN URUGUAY.
      Hoy presentamos una amplia gama de modelos con un único espíritu ganador en carreteras y circuitos.</div>
  </div>
  <!--<div id="facebook">
    <iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FHilton-Motors-Uruguay%2F227114284021078&amp;width=193&amp;height=320&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=false&amp;header=true" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:193px; height:320px;" allowTransparency="true"></iframe>
  </div>-->
  <div id="venta">
    <div class="secciones">Usados seleccionados</div>
    <div id="venta_autos">
      <?php while ($row=mysql_fetch_array ($usados_autos)) {?>
      <div class="productos">
        <div class="productos_a"><strong><?php echo $row['modelo']; ?></strong></div>
        <div class="productos_b">(<?php echo $row['marca']; ?>)</div>
        <div class="productos_foto"><img src="fotos/usados/thumbs/<?php echo $row['foto']; ?>" width="201" height="128" /></div>
        <div class="productos_1">
          <?php if ($row['precio']=="") { } else { echo "U$S ";} ?>
          <?php echo $row['precio']; ?></div>
        <div class="productos_2"><a href="?mod=usado&amp;id=<?php echo $row['id']; ?>">[Más información]</a></div>
      </div>
      <?php } ?>
      <div class="ventaLink"><a href="?mod=usados">Ver nuestros autos usados</a></div>
    </div>
    <div id="venta_motos">
      <?php while ($row=mysql_fetch_array ($usados_motos)) {?>
      <div class="productos">
        <div class="productos_a"><strong><?php echo $row['modelo']; ?></strong></div>
        <div class="productos_b">(<?php echo $row['marca']; ?>)</div>
        <div class="productos_foto"><img src="fotos/usados/thumbs/<?php echo $row['foto']; ?>" width="201" height="128" /></div>
        <div class="productos_1">
          <?php if ($row['precio']=="") { } else { echo "U$S ";} ?>
          <?php echo $row['precio']; ?></div>
        <div class="productos_2"><a href="?mod=usado&amp;id=<?php echo $row['id']; ?>">[Más información]</a></div>
      </div>
      <?php } ?>
      <div class="ventaLink"><a href="?mod=usados_motos">Ver nuestras motos usadas</a></div>
    </div>
  </div>
</div>
