const libro ={
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    estado: true,
    capitulos: ["1.El Inicio de todo","2.La muerte de el"],

    describirLibro(){
        console.log(`Libro Titulado ${this.titulo}
            escrito por ${this.autor} en el año
            ${this.anio}, el estado es ${this.estado}`);
    },

    anadirCapitulos(cap){
        this.capitulos.push(cap);
        
    },
    
    verCapitulos(){
        for(i = 0; i < this.capitulos.length; i++){
            console.log(`${i+1}. ${this.capitulos[i]}`)
        }
    },

    eliminarCapitulo(){
        this.capitulos.pop();
    }

}
libro.anadirCapitulos("3. Lo que falta");
libro.eliminarCapitulo();
libro.verCapitulos();
