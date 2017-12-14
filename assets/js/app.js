$(document).ready(function(){
  $('.externo').hide();
	$('#containerUno').fadeIn(4000).fadeOut(2000);
  var url = 'cargado.html';
  $(location).attr('href', url);
})