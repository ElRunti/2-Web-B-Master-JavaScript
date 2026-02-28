const boton = document.getElementById("generar");

boton.onclick = function(){

    let longitud = document.getElementById("longitud").value;

    let chars = "";

    if(document.getElementById("mayusculas").checked)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(document.getElementById("minusculas").checked)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("numeros").checked)
        chars += "0123456789";

    if(document.getElementById("simbolos").checked)
        chars += "!@#$%^&*()";

    if(chars == ""){
        alert("Selecciona una opción");
        return;
    }

    let pass = "";

    for(let i=0; i<longitud; i++){

        pass += chars[Math.floor(Math.random()*chars.length)];

    }

    document.getElementById("password").value = pass;

}