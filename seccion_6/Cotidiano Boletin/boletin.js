const notas = [7, 4, 8, 9, 6];
 
function mostrarNotas() {
  const lista = document.getElementById("listaNotas");
  lista.innerHTML = "";
  notas.forEach(nota => {
    const li = document.createElement("li");
    li.textContent = nota;
    lista.appendChild(li);
  });
}
 
function calcularPromedio() {
  const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
  document.getElementById("resultado").textContent = "Promedio: " + promedio.toFixed(2);
}
 
function notaMasAlta() {
  const max = Math.max(...notas);
  document.getElementById("resultado").textContent = "Nota más alta: " + max;
}
 
function hayAplazados() {
  const hay = notas.some(nota => nota < 4);
  document.getElementById("resultado").textContent = "¿Hay aplazados?: " + (hay ? "Sí" : "No");
}
 
mostrarNotas();
 