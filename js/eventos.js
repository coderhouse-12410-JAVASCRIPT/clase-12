// Use el selector definido en myconfig.input_form
// Y asigne el event change (onchange)
$( myconfig.input_form).change( function(){
    alert(" Cambio el input")
});

// Cambiamos de color, modificando el CSS cuando se dispara
// El evento focus o onfocus
$( '#contact-form li:last-child input' ).focus( function() {
    // This es el elemento definido por el selector
    jQuery( this ).css("color", "green");
});