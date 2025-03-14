function calcularLitros() {
    var elemntoKm = document.getElementById("texto");
    var textoKm = elemntoKm.Value;
    var cantKm = Number(textoKm);

    var cantLitros = Math.ceil(cantKm/8.8);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga" + cantLitros + "litros de combustible"
}