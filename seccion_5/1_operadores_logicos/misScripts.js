function calcular(){
    let elementoRespuesta1 = document.getElementById("respuesta1");
    let elementoRespuesta2 = document.getElementById("respuesta2");
    let elementoRespuesta3 = document.getElementById("respuesta3");

    let elementoEdad = document.getElementById("textoEdad");
    let edad = elementoEdad.value;

    let puedeBeber = edad >= 18;
    elementoRespuesta1.textContent = puedeBeber;

    let puedeIngresar = edad >=18 && edad <= 30;
    elementoRespuesta2.textContent = puedeIngresar;

    let entradagratis = edad == 20 || edad == 25;
    elementoRespuesta3.textContent = entradagratis;
}