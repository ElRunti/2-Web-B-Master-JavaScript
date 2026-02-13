//Seleccionados nuestos elementos del DOM
const titulo = document.getElementById("titulo");
console.log(titulo);

const texto = document.getElementById("texto");

const caja = document.getElementById("caja");
    console.log(caja);

const btnTexto = document.getElementById("btn-texto")
const btnColor = document.getElementById("btn-color")
const btnOcultar = document.getElementById("btn-ocultar")

// Cambiar texto

btnTexto.addEventListener("click",() =>{
    titulo.textContent = 'Cambiaste el texto desde javascript'
});

btnColor.addEventListener("click",() => {
    titulo.style.color = 'purple';
    caja.style.backgroundColor = 'pink';

});

// para ocultar la caja

btnOcultar.addEventListener("click", () => {
    if(caja.style.display === "none"){
        caja.style.display ="block";
    }else{
        caja.style.display = "none";
    }
})
