async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: titulo,
                description: contenido,
            }),
        });
 
        if (!respuesta.ok) {
            throw new Error("Error en la solicitud " +
                respuesta.statusText);
        }
 
        let data = await respuesta.json();
        console.log('Post creado:', data);
 
    } catch (error) {
        console.error('Algo salio mal al crear el registro: ', error);
    }
}
 
crearPost("Mi titulo",
     {"contenido1": "Mi contenido1 de ejemplo",
      "contenido2": "Mi contenido2 de ejemplo"});