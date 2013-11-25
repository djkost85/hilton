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
    
  
     <div class="triumph_menu" id="tiger800_features">
      
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
            	<td class="foto"><img src="img/marcas/triumph/Tiger800/motor100x100.jpg" alt="Tiger 800 XC motor"/></td>
                <td>
                	<h2>MOTOR</h2>
                El motor tricilíndrico de 95 CV está hecho para la aventura. Tiene tanto par repartido por todo el rango de revoluciones que se le puede apretar a fondo desde pocas vueltas. Es perfecto para adelantar sin reducir de marcha y rodar sin complicaciones por terreno montañoso, pero también es justo lo que necesitas para superar situaciones complicadas en tus aventuras campo a través.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Tiger800/transmision100x100.jpg" alt="Tiger 800 XC transmisión"/></td>
                <td>
                	<h2>TRANMISIÓN</h2>
                 Su sólida fiabilidad se extiende también a la transmisión: seis marchas, un fuerte embrague con maneta de accionamiento ligero para las situaciones más complicadas y tracción final por cadena por su simplicidad, menor peso y mayor distancia libre al suelo. Esto permite modificar la relación final para conducción a baja velocidad constante.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Tiger800/frenos100x100.jpg" alt="Tiger 800 XC frenos"/></td>
                <td>
                	<h2>FRENOS</h2>
                 Hay que proporcionar suficiente fuerza de frenado en la carretera, pero de manera no demasiado abrupta ni intimidatoria al rodar sobre tierra. Por eso hemos instalado en la rueda delantera de la Tiger 800XC un par de pinzas deslizantes de dos pistones y discos de 308 mm, y una pinza de un pistón y un disco de 255 mm en la rueda trasera.
El ABS también es opcional pero se puede desactivar para conducción fuera de asfalto, donde a veces queremos bloquear una rueda.

                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Tiger800/suspension100x100.jpg" alt="Tiger 800 XC suspensión"/></td>
                <td>
                	<h2>SUSPENSION</h2>
                 La suspensión de la Tiger 800XC tiene un imponente recorrido de 220 mm delante y 215 mm detrás. Justo lo que hace falta cuando la pista está muy rota. Hemos instalado una horquilla invertida Showa de 45 mm y un monoamortiguador Showa con ajuste de precarga y extensión para que puedas adaptar la suspensión a la circulación por asfalto o por campo.
                </td>
            </tr>
            
              <tr>
                <td class="foto"><img src="img/marcas/triumph/Tiger800/manillar100x100.jpg" alt="Tiger 800 XC manillar"/></td>
                <td>
                	<h2>MANILLAR</h2>
                  El manillar de aluminio se puede ajustar hacia adelante y hacia atrás y también se puede ajustar el recorrido de las manetas.
                </td>
            </tr>
            
        </table>
	
    </div> <!-- /content -->
     
    
</div><!--#medio-->
