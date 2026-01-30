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