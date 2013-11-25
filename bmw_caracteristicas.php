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
    
  
    <div class="triumph_menu" id="Bonneville_features">
      
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
            	<td class="foto"><img src="img/marcas/triumph/motor.jpg" alt="boneville motor"/></td>
                <td>
                	<h2>MOTOR</h2>
                    En el corazón de la Bonneville los dos cilindros siguen luciendo erguidos y desafiantes. Con 865 cc, el diámetro es mayor y la carrera se ha reducido para aumentar la eficacia y reducir el desgaste, y con cuatro válvulas por cilindro para que respire mejor y consiga más potencia. Hemos instalado árboles de equilibrado en el cárter para se perciban muy pocas vibraciones para tratarse de una bicilíndrica paralela, y al estar refrigerada por aire no hay ningún radiador que estropee la vista. 
                    
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/chasis.jpg" alt="boneville chasis"/></td>
                <td>
                	<h2>CHASIS</h2>
                    Hemos volcado toda nuestra amplia experiencia en bastidores y tecnología en la construcción del sencillo chasis de la Bonneville. El resultado es una dirección fácil y neutra y un excepcional equilibrio incluso a bajas velocidades.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/frenos.jpg" alt="boneville frenos"/></td>
                <td>
                	<h2>FRENOS</h2>
                    Inspirándonos en la Bonneville de los años 70, hemos colocado en el modelo moderno un monodisco adelante para dar un tacto firme y progresivo, y otro monodisco atrás para mejorar el rendimiento y aportar mordiente a la vez que se mantiene el equilibrio general del chasis para que la conducción esté bajo control en todo momento.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/triumph/suspension.jpg" alt="boneville suspension"/></td>
                <td>
                	<h2>SUSPENSION</h2>
                    Tener buen aspecto al mismo tiempo que se trabaja duro no es fácil. Pero los amortiguadores gemelos traseros al estilo de los años 60 cuentan con un acabado cromado y modernos mecanismos internos de amortiguación, al igual que la horquilla de apariencia clásica. Todo esto permite que la conducción de la Bonneville sea suave y controlada, ya sea en carreteras bacheadas o entrando rápido en las curvas.
                </td>
            </tr>
            
              <tr>
                <td class="foto"><img src="img/marcas/triumph/tecnologia.jpg" alt="boneville tecnologia"/></td>
                <td>
                	<h2>TECNOLOGIA</h2>
                    En la actualidad equipa encendido electrónico e inyección de combustible para mejorar la fiabilidad y reducir las emisiones, además de lograr una repuesta más vigorosa y ágil al acelerador. Hemos añadido también un embrague multidisco bañado en aceite para ofrecer un tacto más ligero y progresivo de la maneta del embrague. Y los frenos hidráulicos, aunque potentes, nunca son intimidatorios.
                </td>
            </tr>
            
        </table>
	
    </div> <!-- /content -->
     
    
</div><!--#medio-->
