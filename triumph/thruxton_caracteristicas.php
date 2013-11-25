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
    
  
     <div class="triumph_menu" id="thruxton_features">
      
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
            	<td class="foto"><img src="img/marcas/triumph/Thruxton/motor100x100.jpg" alt="Thruxton motor"/></td>
                <td>
                	<h2>MOTOR</h2>
                  Las café racer se diseñaron para ofrecer prestaciones, no solo para tener buen aspecto. En la actualidad, este motor bicilíndrico paralelo de 865 cc genera 68 CV con un par máximo de 68 Nm, con suficiente empuje a bajas revoluciones como para que puedas aprovecharlo al máximo.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Thruxton/chasis100x100.jpg" alt="Thruxton chasis"/></td>
                <td>
                	<h2>CHASIS</h2>
                  Hemos volcado toda nuestra experiencia en bastidores y tecnología en la construcción del sencillo chasis de la Thruxton. El resultado es una dirección fácil y neutra y un excepcional equilibrio incluso a bajas velocidades.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Thruxton/frenos100x100.jpg" alt="Thruxton frenos"/></td>
                <td>
                	<h2>FRENOS</h2>
                   En la rueda delantera se encuentra un gran freno monodisco de 320 mm, suficientemente potente para equipararse al carácter deportivo de la Thruxton y que transmite muchas sensaciones para mejorar tu pilotaje. Además hemos hecho que perturbe lo menos posible el aspecto sesentero de la moto.En la rueda trasera monta otro monodisco, así que no hay dudas sobre la moderna capacidad de frenada de la Thruxton. 
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/Thruxton/suspension100x100.jpg" alt="Thruxton suspensión"/></td>
                <td>
                	<h2>SUSPENSION</h2>
                  Hemos instalado una horquilla de 41 mm y amortiguadores traseros cromados y los hemos regulado para un pilotaje más firme y un mayor control en curvas a gran velocidad. Los amortiguadores incluyen ajuste de precarga por si llevas un acompañante o para adaptarlos a tu estilo de pilotaje.
                </td>
            </tr>
            
              <tr>
                <td class="foto"><img src="img/marcas/triumph/Thruxton/manillar100x100.jpg" alt="Thruxton chasis"/></td>
                <td>
                	<h2>MANILLAR</h2>
                  Manillar "Ace" bajo y estrecho, llamado así por el famoso Ace Café, con los clásicos retrovisores en los extremos.
                </td>
            </tr>
            
        </table>
	
    </div> <!-- /content -->
     
    
</div><!--#medio-->
