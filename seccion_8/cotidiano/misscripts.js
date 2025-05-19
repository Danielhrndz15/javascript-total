class Carro {
    constructor(marca, modelo, color, anio, titular) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio;
        this.titular = titular;
    }

    verAutomovil() {
        return this.marca + " " + this.modelo + " - Color: " + this.color + " - Año: " + this.anio + " - Propietario: " + this.titular;
    }
}
const listaCoches = [
    new Carro("Ford", "Focus", "Rojo", 2015, "Matías Pérez"),
    new Carro("Chevrolet", "Camaro", "Negro", 2018, "Silvina Marquet"),
    new Carro("Toyota", "Corolla", "Blanco", 2021, "Carlos García")
];
function mostrarAutomoviles() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (var i = 0; i < listaCoches.length; i++) {
        var item = document.createElement("li");
        item.textContent = listaCoches[i].verAutomovil();
        lista.appendChild(item);
    }
}
document.getElementById("verRegistros").addEventListener("click", mostrarAutomoviles);