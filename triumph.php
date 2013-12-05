<?php
	$id=$_REQUEST['id'];
	$modelos = array('bonneville','bonnevillet100','scrambler','thruxton','tiger800','tigerexplorerxc');
	if(isset($id) && !empty($id)){$modelo=$modelos[$id];} 
	else {$modelo=$modelos[0];}
?>

<link href="style.css" rel="stylesheet" type="text/css" />
<link href="triumph/triumph.css" rel="stylesheet" type="text/css" />
<script src="triumph/js/codigo.js" type="text/javascript"></script>
<div id="medio">
 	<div id="triumph_header">
    	<p>	GO YOUR OWN WAY </p>
        
        <ul>
        	<li><a <?php if($modelo=='bonneville') echo 'class="color"' ?> href="?mod=triumph&id=0">Bonneville</a></li>
            <li><a <?php if($modelo=='bonnevillet100') echo 'class="color"' ?> href="?mod=triumph&id=1">Bonneville T100</a></li>
            <li><a <?php if($modelo=='scrambler') echo 'class="color"' ?> href="?mod=triumph&id=2">Scrambler</a></li>
            <li><a <?php if($modelo=='thruxton') echo 'class="color"' ?> href="?mod=triumph&id=3">thruxton</a></li>
            <li><a <?php if($modelo=='tiger800') echo 'class="color"' ?> href="?mod=triumph&id=4">Tiger 800 XC</a></li>
            <li><a <?php if($modelo=='tigerexplorerxc') echo 'class="color"' ?> href="?mod=triumph&id=5">Tiger Explorer XC</a></li>
        </ul> 
    </div> 
    
    
    
<?php include('triumph/'.$modelo.'.php');?>


</div><!--#medio-->
