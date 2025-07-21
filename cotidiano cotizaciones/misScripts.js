// Retardo visual para el usuario
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
// Insertar título
function cargarElementos() {
    document.getElementById("titulo").textContent = "Cotizaciones Online";
}
 
// Insertar textos de carga
function cargarTextos() {
    document.getElementById("EurUsd").textContent = "Euro a Dólares: cargando...";
    document.getElementById("CrcUsd").textContent = "Colones a Dólares: cargando...";
    document.getElementById("BitcoinUsd").textContent = "Bitcoin a USD: cargando...";
}
 
// Mostrar cotización específica
function mostrarCotizacion(datos) {
    switch (datos.tipo) {
        case "BTCUSD":
            document.getElementById("BitcoinUsd").textContent = "Bitcoin a USD: " + datos.valor;
            break;
        case "EURUSD":
            document.getElementById("EurUsd").textContent = "Euro a Dólares: " + datos.valor;
            break;
        case "CRCUSD":
            document.getElementById("CrcUsd").textContent = "Colones a Dólares: " + datos.valor;
            break;
    }
}
 
// XMLHttpRequest para CRC/USD
function crearPedido(url, callback, tipo) {
    var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let respuesta = JSON.parse(xhr.responseText);
            let usd_crc = respuesta.rates['CRC'];
            let valor = (1 / usd_crc).toFixed(5);
            callback({ tipo: tipo, valor: valor });
        }
    };
    xhr.send();
}
 
// Peticiones a las APIs externas
function cargarCotizaciones(mostrarCotizacion) {
    // Euro a Dólar (fetch)
fetch('https://api.exchangerate-api.com/v4/latest/EUR')
        .then(response => response.json())
        .then(data => {
            mostrarCotizacion({ tipo: "EURUSD", valor: data.rates['USD'] });
        });
 
    // Colón costarricense a Dólar (XMLHttpRequest – invertido)
crearPedido('https://api.exchangerate-api.com/v4/latest/USD', mostrarCotizacion, "CRCUSD");
 
    // Bitcoin a Dólar (fetch, CoinGecko)
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            mostrarCotizacion({ tipo: "BTCUSD", valor: data.bitcoin.usd });
        });
}
 
// Orquestador principal
async function cargarContenido() {
    await delay(2500); // 2.5 segundos de espera
    cargarElementos();
    cargarTextos();
    cargarCotizaciones(mostrarCotizacion);
}