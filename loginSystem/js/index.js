var $this;
var label;

/*  selecciona los input y textarea dentro de la clase form.
    cuando se apreta una tecla, se selecciona o se va de foco se ejecuta lo siguiente.
    (Se quitan y agreagan clases al label). */
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
    /*  el input o text area. */
   $this = $(this);
      //el tag anterior a el input osea el label.
      label = $this.prev('label');
      //si el evento fue presionar una tecla...
	  if (e.type === 'keyup') {
            //si el input o textarea no tiene nada (osea se borro)
			if ($this.val() === '') {
            //al input, textarea se le quita la clase highlight.
          label.removeClass('active highlight');
        } else {
            //si tiene algo, se le agrega la clase.
          label.addClass('active highlight');
        }
    //si el evento fue que se fue el foco...
    } else if (e.type === 'blur') {
        //si no tiene nada escrito
    	if( $this.val() === '' ) {
            //se quita la clase active highlight -- creo que se podria quitar el active de esta sentencia.
    		label.removeClass('active highlight');
			} else {
                //si tiene algo escrito se deja active y se quita higlight
		    label.removeClass('highlight');
			}
        //si el evento fue dar foco
    } else if (e.type === 'focus') {
        //si no tiene nada escrito
      if( $this.val() === '' ) {
            // se le quita solo la clase highlight
    		label.removeClass('highlight');
			}
      else if( $this.val() !== '' ) {
          // si tiene algo se le agrega highlight
		    label.addClass('highlight');
			}
    }
});
/*
    active - tiene escrito pero no esta seleccionado
    active highlight - tiene escrito y esta seleccionado.
    highlight - no tiene escrito pero esta seleccionado.
    nada - ni escrito ni seleccionado.
    esta todo mal este script pero funciona.
*/




$('.tab a').on('click', function (e) {
  /*    si esto disparaba algo, con esto se bloquea todo, y, en cambio, se ejecuta lo siguiente. */
  e.preventDefault();

  /*    se le agrega la clase active y al hermano, es decir al otro .tab a se le quita la clase active. */
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  /*    target guarda lo que contiene el atributo href del .tab <a> apretado.
        este contiene o #login o #singup (esta cadena sirve para buscar como id="login" o "singup") */
  target = $(this).attr('href');

  // .tab-content > div selecciona un div cuyo padre (el primero que lo contiene) es un tag de la clase .tab-content.
  // .not selecciona los que no son del tipo #singup o #login y lo oculta.
  // asi se logra que si apretaste un boton, se selecciona el que no apretaste y se oculta
  $('.tab-content > div').not(target).hide();

  // aca lo que se hace es $("#singup").fadeIn(1600); se selecciona por id.
  $(target).fadeIn(600);
});
