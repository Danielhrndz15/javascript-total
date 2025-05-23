class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
 
    informacion() {
        return "Nombre: " + this.nombre + ", Peso: " + this.peso + "kg, Edad: " + this.edad + " años";
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this.raza = raza;
    }
 
    informacion() {
        return Animal.prototype.informacion.call(this) + ", Raza: " + this.raza;
    }
}
 
class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
 
    informacion() {
        return Animal.prototype.informacion.call(this) + ", Sexo: " + this.sexo;
    }
}
 
class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }
 
    informacion() {
        return Animal.prototype.informacion.call(this) + ", Color: " + this.color;
    }
}
 
var perro1 = new Perro("Snoopy", 12, 5, "Shih Tzu");
var gato1 = new Gato("batigato", 4, 3, "Macho");
var conejo1 = new Conejo("conejito malo", 2, 2, "Blanco");
 
var animales = [perro1, gato1, conejo1];
 
function mostrarAnimales() {
    var lista = document.getElementById("listaAnimales");
    lista.innerHTML = "";
 
    for (var i = 0; i < animales.length; i++) {
        var item = document.createElement("li");
        item.textContent = animales[i].informacion();
        lista.appendChild(item);
    }
}