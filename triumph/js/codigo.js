// JavaScript Document

$(document).ready(ini)

function ini(){
	
$('.triumph_menu ul li a').click(function(e){
	e.preventDefault(); 
	quienCargo= $(this).attr('href');
	$('.triumph_menu ul li a').removeClass('active')
	$(this).addClass('active');
	$('.triumph_content').load('triumph/'+quienCargo);
	
	})

}