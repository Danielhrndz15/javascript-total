function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");
    if(!document.getElementById("edad").value) {
        alert("Por favor, ingrese tu edad antes de continuar.");
        return;
    }
    switch(genero) {
        case 'drama':
            if (edad < 13) {
                recomendacion.textContent = "Casablanca";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "The Shawshank Redemption";
                } else {
                    recomendacion.textContent = "Taxi Driver";
                }
            }
            break;
        case 'comedia':
            if (edad < 13) {
                recomendacion.textContent = "Back to the Future";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "The Truman Show";
                } else {
                    recomendacion.textContent = "The Wolf of Wall Street";
                }
            }
            break;
        case 'musical':
            if (edad < 13) {
                recomendacion.textContent = "La La Land";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "Les Miserables";
                } else {
                    recomendacion.textContent = "The Rocky Horror Picture Show";
                }
            }
            break;
        case 'crimen':
            if (edad < 13) {
                recomendacion.textContent = "No hay opciones para esta edad";
            } else {
                if (edad < 16) {
                    recomendacion.textContent = "El Secreto de tus Ojos";
                } else {
                    recomendacion.textContent = "The Godfather";
                }
            }
            break;
    }
}
