// Agregar elemento usando selectores
$( "#contact-form li:last-child").append('</br><a href="#">Este texto se inserto</a>');


$( document).on('keypress', function(event){
    if ( event.which == 13) {
        alert("Se presiono enter");
    }
});