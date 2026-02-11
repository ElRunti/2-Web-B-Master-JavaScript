// Repite mientras la condicion sea true 

// let i =1;
// while(i <= 3){
//     console.log("while", i);
//     i++;
// }


// let entrada = "";

// while(entrada !== "salir"){
//     entrada = prompt("ingresa un texto)");
// }

// console.log("saliste");

// Arreglos 
let frutas = ["manzana", "pera", "uva","sandia"];




for(let i =0; i < frutas.length; i++){
    console.log("fruta", frutas[i]);
}

console.log("Metodos de los arreglos");
//declarando un arreglo vacio 
let alumnos = [];
console.log(alumnos);
// Metodo push agrega al final
alumnos.push("Ruben");
alumnos.push("Bruno");
alumnos.push("Pedro");

console.log(alumnos);
// Metodo pop elimina el ultimo elemento
alumnos.pop();
console.log(alumnos);
// Metodo unshift agrega al inicio
alumnos.unshift("Jose");
alumnos.unshift("Beto");
alumnos.unshift("Misael");
console.log(alumnos);

// Metodo shift elimina el primer elemento
alumnos.shift();
console.log(alumnos);

// Hacer una lista de super 
// Practicar los metodos 
// Imprimir la lista con indice

// poner un total de productos
// hacerlo con prompt

let listaSuper = [];
i = "";

while(i !== "salir"){
 i= prompt("ingresa un producto para la lista de super o escribe salir para terminar");
    if(i !== "salir"){
        listaSuper.push(i);
    }else{
        console.log("saliste");
        console.log("tu lista de super es:");
        for(let indice=0; indice < listaSuper.length; indice++){
            console.log(indice + 1 + ". " + listaSuper[indice]);
            console.log("Total de productos: " + listaSuper.length);
        }
       
    }
}



