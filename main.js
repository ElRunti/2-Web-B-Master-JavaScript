//Este es un comentario en JavaScript

//Tipo de datos

//Number: Enteros y decimales
let edad = 24;
let precio = 199.99;

console.log("Number:");
console.log(edad);
console.log(precio);
console.log(typeof edad);
console.log(typeof precio);

//String (texto)

let nombre = "Ruben";
let saludo = 'Hola, mundo';

console.log("Tipo de dato String:");
console.log(nombre);
console.log(saludo);
console.log(typeof nombre);
console.log(typeof saludo);

//Boolean (verdadero o falso)
let esMayorDeEdad = true;
let TienePermiso = false;

console.log("Tipo de dato Boolean:");
console.log(esMayorDeEdad);
console.log(TienePermiso);
console.log(typeof esMayorDeEdad);
console.log(typeof TienePermiso);

//Undefined (variable declarada sin valor)

let telefono;
console.log("Tipo de dato Undefined:");
console.log(telefono)
console.log(typeof telefono);

//Null (valor intencioalmente vacio)
let direccion = null;
console.log(direccion)
console.log(typeof direccion);
// Sale object por un error historico de JS

//Object (estructura de datos con propiedades)
let persona = {
    nombre:'Diego',
    edad: '30',
    ciuedad: 'CDMX'
};

console.log("Tipo de dato Object:");
console.log(typeof persona);
console.log(persona);

//Simbol (identificador unico)
let id = Symbol('id');
console.log("Tipo de dato Symbol:");
console.log(typeof id);
console.log(id);