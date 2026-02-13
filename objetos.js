// un objeto es una coleccion de pares clave valor (propiedades)

const disco ={
    // Propiedades (datos del disco)
    titulo: "1989",
    artista: "Taylor Swift",
    año: 2014,
    disponible: false,

    //Propiedad de tipo arreglo
    canciones: ['Style','Blank Space','Shake It Off','Welcome To New York','Out of the Woods'],
    // Podemos guardar ACCIONES relacionadas con los datos
    //Metodo que muestra la informacion
    mostrarinfo(){
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.año}`);
    },

    //Metodo que liste las canciones
    listarCanciones(){
        this.canciones.forEach((cancion,i)=> {
            console.log(`${i + 1}. ${cancion}`);
        }
    )
    },

    agregarCancion(nombre){
        this.canciones.push(nombre);
        console.log(`Cancion agregada ${nombre}`);
    },
    //eliminar cancion
    eliminarCancion(){
        this.canciones.pop();
        console.log("Cancion eliminada")
    },
    cambiarEstadoDisco(){
        if(this.disponible === true){
            this.disponible = false;
            console.log("Se quito de disponible");
        }else if(this.disponible === false){
            this.disponible = true;
            console.log("Se activo")
        }
    }
}
disco.eliminarCancion();
// Acceder a datos con la notacion de punto
console.log(disco.artista);
console.log(disco.canciones);

//Acceder a los datos con notacion de corchetes
console.log(disco['titulo']);
console.log(disco['disponible']);
// Llamar al metodo
disco.mostrarinfo();

disco.listarCanciones();

disco.cambiarEstadoDisco();

// estructura en SCAR cosas de un objeto sin necesidad de escribir objeto.propiedad

const {canciones} = disco;

const [primera, segunda, tercera] = canciones;

console.log(primera);
console.log(segunda);
console.log(tercera);
console.log('-----');

const {canciones: [pista1, pista2, pista3]} = disco;
console.log(pista1);
console.log(pista2);
console.log(pista3);
// se le asigna el valor de la propiedad a una variable 
const { titulo: nombre, año: lanzamiento} = disco;

console.log(nombre);
console.log(lanzamiento);

