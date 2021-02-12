// Obtuve TODOS los input element de la pagina
var myInputs = $( ":input" );

console.log(myInputs);

// Obtener el Form dentro la pagina
var myForm = $( "#contact-form");

console.log(myForm);

// Tomo el primer LI dentro de un elemento con ID contact-form
var myFormFirstLIChild = $( "#contact-form li:first-child");
console.log(myFormFirstLIChild);


// Tomo el primer LI dentro de un elemento con ID contact-form
var myFormLastLIChild = $( "#contact-form li:last-child");
console.log(myFormLastLIChild);


// Tomo el primer LI dentro de un elemento con ID contact-form, siendo
// este un input de nombre name
var myFormInputName = $( myconfig.input_form);
console.log(myFormInputName);


// myFormInputName.remove();