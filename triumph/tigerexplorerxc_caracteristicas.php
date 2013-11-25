<?php
	$id=$_REQUEST['id'];
	$nissan=mysql_query("SELECT * FROM nuevos WHERE marca='Nissan' ORDER BY modelo");
	if(isset($id) && !empty($id)) 
	{
		$modelo=mysql_query("SELECT * FROM nuevos WHERE id='$id'");	
	} 
	else 
	{
		$modelo=mysql_query("SELECT * FROM nuevos WHERE marca='Nissan' ORDER BY RAND() LIMIT 0,1");
	}
?>

<link href="style.css" rel="stylesheet" type="text/css" />
<link href="triumph.css" rel="stylesheet" type="text/css" />

<div id="medio">
 	<div id="triumph_header">
    	<p>	GO YOUR OWN WAY </p>
        
        <ul>
        	<li><a href="#">Bonneville</a></li>
            <li><a href="#">Bonneville T100</a></li>
            <li><a href="#">Scrambler</a></li>
            <li><a href="#">Thruxton</a></li>
            <li><a href="#">Tiger 800 XC</a></li>
            <li><a href="#">Tiger Explorer XC</a></li>
        </ul> 
    </div> 
    
  
     <div class="triumph_menu" id="tigerexplorerxc_features">
      
   		<ul>
        	<li><a href="#">Vista General</a></li>
            <li><a href="#" class="active">Características</a></li>
            <li><a href="#">Especificaciones</a></li>         
        </ul>
        
    </div>
    
    <div class="triumph_content">
    	<table>
        
        	<tr>
           		<td rowspan="5" id="caracteristicas"> 
                	<h2> CARACTERISTICAS </h2>	
                </td>
            	<td class="foto"><img src="img/marcas/triumph/Tiger_explorer/motor100x100.jpg" alt="Tiger Explorer XC motor"/></td>
                <td>
                	<h2>MOTOR</h2>
               Dobles árboles de levas en cabeza, accionan las cuatro válvulas por cilindro de un motor que hace aquello para lo que fue creado incluso cuando la moto está cargada a tope con piloto, pasajero, equipaje completo y afrontando una empinada pendiente de montaña.
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Tiger_explorer/frenos100x100.jpg" alt="Tiger Explorer XC frenos"/></td>
                <td>
                	<h2>FRENOS</h2>
                 La frenada corre por cuenta de dos pinzas de cuatro pistones y discos gemelos de 305 mm delante y un monodisco atrás, todo ello controlado por nuestro avanzado sistema ABS electrónico desconectable.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Tiger_explorer/transmision100x100.jpg" alt="Tiger Explorer XC transmisión"/></td>
                <td>
                	<h2>TRANSMISION</h2>
                 Su sólida fiabilidad se extiende también a la transmisión: seis marchas, un fuerte embrague con maneta de accionamiento ligero para las situaciones más complicadas y tracción final por cadena por su simplicidad, menor peso y mayor distancia libre al suelo. Esto permite modificar la relación final para conducción a baja velocidad constante.

                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Tiger_explorer/instrumentos100x100.jpg" alt="Tiger Explorer XC instrumentos"/></td>
                <td>
                	<h2>INSTRUMENTOS</h2>
                 La Tiger Explorer te muestra todo lo que debes saber durante el viaje. El panel de instrumentos LCD utiliza los interruptores de pulgar con función de desplazamiento arriba/abajo instalados en el manillar y cuenta con un completo ordenador de a bordo que incluye dos contadores que miden a distancia recorrida, el tiempo transcurrido, la velocidad media, el consumo medio, el consumo instantáneo y la autonomía restante. También se muestra en la pantalla LCD la lectura del odómetro, la lectura del sistema de control de presión de los neumáticos (si se ha instalado), el indicador de encendido del asiento calefactado, la información de funcionamiento del ordenador de a bordo y el plazo para la próxima revisión. También muestra un aviso de hielo y la indicación numérica de la temperatura ambiente. 
                </td>
            </tr>
            
              <tr>
                <td class="foto"><img src="img/marcas/triumph/Tiger_explorer/suspension100x100.jpg" alt="Tiger 800 XC suspensión"/></td>
                <td>
                	<h2>SUSPENSION</h2>
                 La suspensión de la Tiger Explorer se ha creado para soportar cualquier tipo de conducción. Utilizamos una sólida horquilla de 46 mm en la parte delantera con un recorrido de 190 mm, perfecta para malas carreteras y conducir cómodamente durante largo tiempo.
En la parte trasera, el monoamortiguador proporciona 194 mm de recorrido y permite el ajuste hidráulico remoto de precarga y ajuste de extensión.

                </td>
            </tr>
            
        </table>
	
    </div> <!-- /content -->
     
    
</div><!--#medio-->
