function enviarFormulario() {
    // Capturar información del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const anio = document.getElementById("anio").value;

    // Crear un documento XML
    const xmlData = `
<usuario>
    <nombre>${nombre}</nombre>
    <email>${email}</email>
    <anio>${anio}</anio>
</usuario>
`;

    // Almacenar el XML en el localStorage
    localStorage.setItem('usuarioXML', xmlData);

    // Redirigir a la página de visualización
    window.location.href = 'visualizar.html';

    // Evitar que el formulario se envíe de la manera tradicional
    return false;
}