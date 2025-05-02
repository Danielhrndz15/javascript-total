const notas = [70, 40, 80, 90, 60];
 
function mostrarNotas() {
    const lista = document.getElementById("listaNotas");
    lista.innerHTML = "";
    for (const nota of notas) {
        const li = document.createElement("li");
        li.textContent = nota;
        lista.appendChild(li);
    }
}
 
function calcularPromedio() {
    let suma = 0;
    let cantidad = 0;
    for (const nota of notas) {
        suma += nota;
        cantidad++;
    }
    const promedio = suma / cantidad;
    document.getElementById("resultado").textContent = "Promedio: " + promedio.toFixed(2);
}
 
function notaMasAlta() {
    let max = notas[0];
    for (const nota of notas) {
        if (nota > max) {
            max = nota;
        }
    }
    document.getElementById("resultado").textContent = "Nota más alta: " + max;
}
 
function hayAplazados() {
    let hay = false;
    for (const nota of notas) {
        if (nota < 40) {
            hay = true;
            break;
        }
    }
    document.getElementById("resultado").textContent = "¿Hay aplazados?: " + (hay ? "Sí" : "No");
}
 
mostrarNotas();
 