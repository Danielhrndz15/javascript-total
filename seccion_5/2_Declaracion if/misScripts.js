function evaluarCompra(cantidadDisponible) {
    let elementoRespuesta = document.getElementById("decision")
 
    let elementoCantidad = document.getElementById("textoCantidad")
    let cantidadComprada = elementoCantidad.value;
 
    if (cantidadComprada <= cantidadDisponible) {
        elementoRespuesta.textContent = "Comprastes " +
            cantidadComprada + " hay disponibles aun " + (cantidadDisponible - parseInt(cantidadComprada)).toString();;
    }
}