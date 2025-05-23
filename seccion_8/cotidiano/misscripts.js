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
    new Carro("Ford", "focus", "rojo", 2015, "matías pérez"),
    new Carro("Chevrolet", "camaro", "negro", 2018, "silvina marquet"),
    new Carro("Toyota", "corolla", "blanco", 2021, "carlos garcía")
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