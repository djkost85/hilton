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
    
  
     <div class="triumph_menu" id="scrambler_features">
      
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
            	<td class="foto"><img src="img/marcas/Triumph/scrambler/motor100x100.jpg" alt="Scrambler motor"/></td>
                <td>
                	<h2>MOTOR</h2>
                   En la Scrambler hemos retocado el motor de 865 cc y ocho válvulas para conseguir más par a muy pocas vueltas. El par máximo de 68 N•m se alcanza a 4750 rpm pero comienza a generar empuje útil mucho antes, el 90% del par ya está disponible a tan solo 2500 rpm. La potencia máxima es de 59 CV, más que suficiente para encontrar diversión en todas las situaciones. 
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/Triumph/scrambler/chasis100x100.jpg" alt="Scrambler chasis"/></td>
                <td>
                	<h2>CHASIS</h2>
                  Con el escape bien arriba se puede contemplar en todo su esplendor el tradicional bastidor tubular de acero en doble cuna. Con un estilo clásico, pero suficientemente resistente como para satisfacer las exigencias de la conducción moderna. El motor está sujeto con pernos para aportar su propia rigidez al bastidor, logrando así una conducción ligera, predecible e intensamente apasionante.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/Triumph/scrambler/frenos100x100.jpg" alt="frenos motor"/></td>
                <td>
                	<h2>FRENOS</h2>
                   Hemos emparejado perfectamente las prestaciones de la Scrambler con un monodisco delantero que proporciona una frenada confiada y progresiva sin llegar a ser abrumadora. – ciclo
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/Triumph/scrambler/suspension100x100.jpg" alt="Scrambler suspension"/></td>
                <td>
                	<h2>SUSPENSION</h2>
                  Los dos amortiguadores colocados atrás tienen una apariencia clásica por fuera, pero por dentro son totalmente modernos. Con ellos se consigue una amortiguación equilibrada y eficaz para disfrutar de una conducción confortable y controlada. La horquilla luce los tradicionales fuelles de goma para protegerla de la suciedad, y el breve guardabarros delantero es idéntico al que se instalaba en los años 60.
                </td>
            </tr>
            
              <tr>
                <td class="foto"><img src="img/marcas/Triumph/scrambler/escape100x100.jpg" alt="escape motor"/></td>
                <td>
                	<h2>ESCAPE</h2>
                  En posición alta con tubos gemelos de acero cromado y tradicionales protectores térmicos, está inspirado en la Triumph TR6C Trophy Special de los años 60.
                </td>
            </tr>
            
        </table>
	
    </div> <!-- /content -->
     
    
</div><!--#medio-->
