function cargarResumen() {
    fetch('banco.json')
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(datos) {
            document.getElementById('banco').textContent = datos.banco;
            document.getElementById('sucursal').textContent = datos.sucursal;
            document.getElementById('titular').textContent = datos.titular;
            document.getElementById('cuenta').textContent = "Cuenta: " + datos.cuenta;
            document.getElementById('usd').textContent = datos.saldos[0].monto + " USD";
            document.getElementById('euro').textContent = datos.saldos[1].monto + " EUR";
            document.getElementById('tarjeta').textContent = "Tarjeta: " + datos.tarjeta;
            document.getElementById('fecha').textContent = "Abierta: " + datos.fecha_apertura;
        })
        .catch(function(error) {
            console.error("Error al cargar resumen.json:", error);
        });
}