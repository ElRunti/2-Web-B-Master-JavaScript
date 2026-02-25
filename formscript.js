const formulario = document.getElementById("formulario");
const comentario = document.getElementById("comentario");


formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const fecha = new Date().toLocaleDateString();
    const texto = comentario.value;

    const nuevoComentario = document.createElement("textarea");
        nuevoComentario.textContent = texto;
    const fechaComentario = document.createElement("small");
    fechaComentario.textContent = `Publicado con fecha de ${fecha}`;

    
        document.body.appendChild(nuevoComentario);
        comentario.value = "";
        document.body.appendChild(fechaComentario);
});