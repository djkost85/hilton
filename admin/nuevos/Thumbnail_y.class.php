<?php function thumbjpeg($imagen,$altura) {
     // Lugar donde se guardar�n los thumbnails respecto a la carpeta donde est� la imagen "grande".
     $dir_thumb = "thumbs/";
     // Prefijo que se a�adir� al nombre del thumbnail. Ejemplo: si la imagen grande fuera "imagen1.jpg",
     // el thumbnail se llamar�a "tn_imagen1.jpg"
     $prefijo_thumb = "";

     // Aqu� tendremos el nombre de la imagen.
     $nombre=basename($imagen);
     // Aqu� la ruta especificada para buscar la imagen.
     $camino=dirname($imagen)."./../fotos/nuevos/";
	 
     // Intentamos crear el directorio de thumbnails, si no existiera previamente.
     if (!file_exists($camino.$dir_thumb))
          @mkdir ($camino.$dir_thumb, 0777) or die("No se ha podido crear el directorio ".$camino.$dir_thumb);

     // Aqu� comprovamos que la imagen que queremos crear no exista previamente
     if (!file_exists($camino.$dir_thumb.$prefijo_thumb.$nombre)) {
          echo $camino.$dir_thumb.$prefijo_thumb.$nombre."<br>\n";
          $img = @imagecreatefromjpeg($camino.$nombre) or die("No se encuentra la imagen $camino$nombre<br>\n");

          // miramos el tama�o de la imagen original...
          $datos = getimagesize($camino.$nombre) or die("Problemas con $camino$nombre<br>\n");

          // intentamos escalar la imagen original a la medida que nos interesa
          $ratio = ($datos[1] / $altura);
          $anchura = round($datos[0] / $ratio);

          // esta ser� la nueva imagen reescalada
          $thumb = imagecreatetruecolor($anchura,$altura);

          // con esta funci�n la reescalamos
          imagecopyresampled ($thumb, $img, 0, 0, 0, 0, $anchura, $altura, $datos[0], $datos[1]);

          // voil� la salvamos con el nombre y en el lugar que nos interesa.
          imagejpeg($thumb,$camino.$dir_thumb.$prefijo_thumb.$nombre);
     }
} 
 ?>