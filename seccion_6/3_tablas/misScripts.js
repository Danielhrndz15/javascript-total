function multiplicar() {
    // Obtener el número
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);
 
    // Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");
 
    // Vaciar tabla antes de ejecutar
    elementoTablaMultiplicar.innerText = "";
 
    // Producir y mostrar resultados
    for (let x = 1; x <= 10; x++) {
        // Calcular el resultado
        let numeroResultado = numeroTabla * x;
 
        // Armar string con resultado
        let textoResultado = numeroTabla + " por " + x + " = " + numeroResultado;
 
        // Crear un elemento de lista y agregarlo a la tabla
        let elementoLista = document.createElement("li");
        elementoLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(elementoLista);
    }
}