let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibros(){
    console.log("Libros leidos:");
    for(let i = 0; i < librosLeidos.length; i++){
        console.log(`${librosLeidos[i]}`);
    }
}

agregarLibro("El señor de los anillos");
agregarLibro("Harry Potter");
agregarLibro("El principito");

mostrarLibros();