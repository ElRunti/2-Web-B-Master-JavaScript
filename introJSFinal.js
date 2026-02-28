
const formulario = document.getElementById("formulario");
const campoComentario = document.getElementById("comentario");
const listaComentarios = document.getElementById("listaComentarios");

formulario.addEventListener("submit", function(e) {

    e.preventDefault(); 

    const texto = campoComentario.value;

   
    const divComentario = document.createElement("div");
    divComentario.classList.add("comentario");

    
    const fecha = new Date();
    const fechaTexto = fecha.toLocaleString();

   
    const pTexto = document.createElement("p");
    pTexto.textContent = texto;

    const pFecha = document.createElement("p");
    pFecha.textContent = fechaTexto;
    pFecha.classList.add("fecha");

 
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");

    botonEliminar.addEventListener("click", function() {
        listaComentarios.removeChild(divComentario);
    });

   
    divComentario.appendChild(pTexto);
    divComentario.appendChild(pFecha);
    divComentario.appendChild(botonEliminar);

   
    listaComentarios.appendChild(divComentario);

  
    campoComentario.value = "";

});