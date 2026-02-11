function saludar(nombre){
    return `Hola, ${nombre}!`;
}

let saludo = saludar("Pedro");
console.log(saludo);
console.log(saludar("Ruben"));


function sumar(a , b){
    console.log(a + b); // SOLO IMPRIME EL VALOR
}
sumar(3,5);

function restar(a , b){
    let resultado = a - b; //variable local scoupe
    return resultado; // RETORNA UN VALOR
}

function sinretur(){
    let x = 5;
}

console.log(sinretur());
// El error solo aparece cuando no puede ejecutar
// la instruccion que sigue

// Arrow funtion || funcion de flecha

const dividir = (a , b) => a/b; //forma moderna de hacer funciones
console.log(dividir(10,2));

const suma = (a , b) => { // si la funcion es karga  con {} no tiene return automatico
    return a + b;
}

let e = 2;
let r = 2;

const multiplicacionPara = (e , r) => {
    if(e % 2 === 0 && r % 2 === 0){
        return e * r;
    }
    return console.log("No se puede multiplicar");
}

console.log(multiplicacionPara(e, r));

// funcion anonima (no necesita darle nombre, ejecuta ago puntual)
// callbacks
setTimeout( function(){
    console.log("Ejecutando una funcion anonima");
}, 5000);
// Cuando no utilizan funciones anonimas
// se tiene que reutilizar muchas veces
/*
Tiene logica grande
necesita ser testeada
se necesita claridad
*/

function mascotas(a,b,c){
    console.log("Nombres de las mascotas: " + a + ", " + b + ", " + c);
}

mascotas("Pecas", "Luna", "Nube");

// Crear 3 funciones 
// Funcion para calcular el area de un triangulo
let base = 5;
let altura = 10;
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.log("Area del triangulo: " + areaTriangulo(base, altura));
let base2 = 5;
let altura2 = 10;
function areaTriangulo2(base, altura){
    return (base * altura) / 2;
}
console.log("Area del triangulo: " + areaTriangulo2(base2, altura2));


//funcion para calcular si un numero es primo
let num = 7;
function esPrimo(num){
    if(num % 2 === 0){
        return console.log("Es un numero no primo");
    } else {
        return console.log("Es un numero primo");
    }
}
console.log(esPrimo(num));

let num2 = 2;
function esPrimo2(num2){
    if(num2 % 2 === 0){
        return console.log("Es un numero no primo");
    } else {
        return console.log("Es un numero primo");
    }
}
console.log(esPrimo(num2));
//funcion para generar numeros fibonacci

function fibonacci(n){
    let s=1;
    let p;
    for(let i = 0; i <= n; i++){
        p = i + s++;
        console.log(p);
        i = i + i++;
    };
}

console.log(fibonacci(10));