let estudiantes = [];
let notas = [];

async function cargarEstudiantes() {
  try {
    const respuesta = await fetch("estudiantes.json");
    estudiantes = await respuesta.json();
  } catch (error) {
    console.error("Error al cargar estudiantes:", error);
  }
}

function registrarNota(nombre) {
  let nota;
  do {
    const entrada = prompt("Ingresa la nota para " + nombre + " (0 a 100):");
    nota = parseInt(entrada);
  } while (isNaN (nota) || nota < 0 || nota > 100);
  return nota;
}

function clasificar(nota) {
  if (nota >= 90) return "Excelente";
  if (nota >= 80) return "Buena";
  if (nota >= 70) return "Aprobada";
  return "Reprobada";
}

async function registrarNotas() {
  await cargarEstudiantes();
  notas = [];

  const lista = document.getElementById("listaEstudiantes");
  lista.innerHTML = "";

  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    const nota = registrarNota(estudiante.nombre);
    const clasificacion = clasificar(nota);

    notas.push({
      nombre: estudiante.nombre,
      nota: nota,
      clasificacion: clasificacion
    });

    const div = document.createElement("div");
    div.className = "estudiante " + (nota >= 70 ? "aprobado" : "reprobado");
    div.textContent = estudiante.nombre + " - Nota: " + nota + " - " + clasificacion;
    lista.appendChild(div);
  }
}

function generarResumen() {
  if (notas.length === 0) {
    alert("Primero debes registrar las notas.");
    return;
  }

  let aprobados = 0;
  let suma = 0;
  let notaMasAlta = -Infinity;
  let notaMasBaja = Infinity;

  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i].nota;
    suma += nota;

    if (nota >= 70) aprobados++;
    if (nota > notaMasAlta) notaMasAlta = nota;
    if (nota < notaMasBaja) notaMasBaja = nota;
  }

  const reprobados = notas.length - aprobados;
  const promedio = (suma / notas.length).toFixed(2);

  const resumen = document.getElementById("resumen");
  resumen.innerHTML =
    "<p>Aprobados: " + aprobados + "</p>" +
    "<p>Reprobados: " + reprobados + "</p>" +
    "<p>Promedio: " + promedio + "</p>" +
    "<p>Nota más alta: " + notaMasAlta + "</p>" +
    "<p>Nota más baja: " + notaMasBaja + "</p>";
}