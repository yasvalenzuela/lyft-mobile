$(document).ready(function(){
  $('#formulario').hide();
	$('#btn2').click(function(){
    $('#logoBlanco').hide();
    $('#logoRosado').hide();
    $('#botones').hide();
    $('#formulario').show();
  });


/*
*deshabilitar el boton
*/
  $('#nextBtn').attr('disabled', true);

/*
*funcion para habilitar el boton cuando se
* ingrese 10 digitos
*/
  $("#inputPhone4").keyup(function(){
    if($(this).val().length == 10){
      $("#nextBtn").removeAttr("disabled");
    }else{
      $("#nextBtn").attr("disabled", true);
    }
  });

/*
*evento de click de boton next
*aparece una alerta
*/
  $('#nextBtn').click(function(){
    alert('Tu código:Lab-781');
  })

});