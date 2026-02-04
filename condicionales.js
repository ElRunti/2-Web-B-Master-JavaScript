let edad = 26;
    // condicion
if(edad >= 18){
    console.log("Eres mayor de edad");// se ejecuta si es true (si es verdadero)
}else{
    console.log("Eres menor de edad");// se ejecuta si es falso
}

let calificacion = 7;

if(calificacion >= 9){
    console.log("Aprobaste el curso");
}else if(calificacion >= 6){
    console.log("Pansaste raspando");
}else{
    console.log("Reprobaste el curso");
}

// Operadores logicos 
// AND &&
// OR ||
// NOT  !
let tieneIne = false;

if(edad >= 18 && tieneIne){
    console.log("Puedes entrar a la fiesta");
}else{
    console.log("No puedes entrar a la fiesta");
}

//let numero = prompt("Ingresa un numero");

//numero = parseInt(numero);

//Si queremos preguntar si es divisible entre 2
//if(numero % 2 === 0){
    console.log("El numero es divisible entre 2");
//}else{
    console.log("El numero no es divisible entre 2");
//}

console.log();

let esPremium = false;
let totalCompra = 1200;
let esFinDeSemana = true;
if(esPremium || totalCompra > 1000 && esFinDeSemana){
    console.log("Tienes descuento");
}else{
    console.log("No tienes descuento");
}