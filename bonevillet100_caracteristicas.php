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
    
  
    <div class="triumph_menu" id="bonnevilleT100_features">
      
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
            	<td class="foto"><img src="img/marcas/Triumph/bonevillet100/motor100x100.jpg" alt="BonevilleT100 motor"/></td>
                <td>
                	<h2>MOTOR</h2>
                   No sería una Bonneville sin un motor bicilíndrico en paralelo y este 865 cc además es una belleza. Su cilindrada lo hace más potente que las Bonnevilles del pasado, pero la tecnología moderna que incorpora también supone una gran versatilidad y eficiencia, mientras que los árboles de levas ofrecen la vibración justa para recordarte que estás conduciendo a una de las motocicletas más legendarias de todos los tiempos. Naturalmente, el motor está refrigerado por aire, lo que significa que no hay ningún radiador que estropee el aspecto de este ícono de la ingeniería.
                    
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/Triumph/bonevillet100/chasis100x100.jpg" alt="BonevilleT100 chasis"/></td>
                <td>
                	<h2>CHASIS</h2>
                  Su excelente maniobrabilidad y su relajante conducción siempre han sido las señas de identidad de la Bonneville. El hecho de partir de una buena base durante años se traduce en que fabricamos motos que son realmente fáciles de conducir y transmiten confianza al piloto.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/Triumph/bonevillet100/frenos100x100.jpg" alt="BonevilleT100 frenos"/></td>
                <td>
                	<h2>FRENOS</h2>
                   Hemos apostado por los frenos de disco delantero y trasero para ofrecer un rendimiento progresivo y equilibrado en la frenada que se adapta a la potencia y al peso de la Bonneville Black, ofreciendo al conductor total confianza y control.
                </td>
            </tr>
            
            <tr>
                <td class="foto"><img src="img/marcas/Triumph/bonevillet100/paneldeinstrumentos100x100.jpg" alt="BonevilleT100 suspension"/></td>
                <td>
                	<h2>PANEL DE INSTRUMENTOS</h2>
                    Velocidad, revoluciones del motor y luces de emergencia. La información importante para cada trayecto aparece en tu línea de visión, lo que significa que solo tienes que echar un vistazo para saber qué pasa. 
                </td>
            </tr>
            
              <tr>
                <td class="foto"><img src="img/marcas/Triumph/bonevillet100/asiento100x100.jpg" alt="BonevilleT100 tecnologia"/></td>
                <td>
                	<h2>ALTURA DEL ASIENTO</h2>
                   Una altura de asiento de tan solo 775 mm resultaba adecuada para las grandiosas Bonnevilles de los años 60, así que también lo es para la T100.
                </td>
            </tr>
            
        </table>
	
    </div> <!-- /content -->
     
    
</div><!--#medio-->
