<?php function thumbjpeg($imagen,$anchura) {

     $dir_thumb = "thumbs/";
     $prefijo_thumb = "";
     $nombre=basename($imagen);

     $camino=dirname($imagen)."./../fotos/nuevos/";

     if (!file_exists($camino.$dir_thumb))

          @mkdir ($camino.$dir_thumb, 0777) or die("No se ha podido crear el directorio ".$camino.$dir_thumb);

          echo $camino.$dir_thumb.$prefijo_thumb.$nombre." <br>\n";

          $img = @imagecreatefromjpeg($camino.$nombre) or die("No se encuentra la imagen $camino$nombre<br>\n");

          $datos = getimagesize($camino.$nombre) or die("Problemas con $camino$nombre<br>\n");

          $altura = imagesy($img) * $anchura / imagesx($img);

          $thumb = imagecreatetruecolor($anchura, $altura);

          imagecopyresampled($thumb, $img, 0, 0, 0, 0, $anchura, $altura, imagesx($img), imagesy($img));

          imagejpeg($thumb,$camino.$dir_thumb.$prefijo_thumb.$nombre);

} ?>
