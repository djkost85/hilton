// JavaScript Document

$(document).ready(ini)

function ini(){
	
$('.triumph_menu ul li a').click(function(e){
	e.preventDefault(); 
	quienCargo= $(this).attr('href');
	$('.triumph_menu ul li a').removeClass('active')
	$(this).addClass('active');
	$('.triumph_content').slideUp('400');
	$('.triumph_content').load('triumph/'+quienCargo, function(){$('.triumph_content').slideDown('400');});
	
	})


modelos = ['bonneville','bonnevillet100','scrambler','thruxton','tiger800','tigerexplorerxc'];


url = window.location.toString();

quienCargo= modelos[url[url.length-1]]+'_overview.php';

	$('.triumph_content').load('triumph/'+quienCargo, function(){$('.triumph_content').slideDown('400');});

}