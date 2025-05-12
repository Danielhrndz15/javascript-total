
let empleados = [];

function Empleado(expediente, nombre, apellido, nacimiento, cargo) {
    this.expediente = expediente;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function agregarEmpleado() {
    let expediente = document.getElementById("txtExpediente").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtNacimiento").value;
    let cargo = document.getElementById("txtCargo").value;

    if (expediente && nombre && apellido && nacimiento && cargo) {
        let nuevoEmpleado = new Empleado(expediente, nombre, apellido, nacimiento, cargo);
        empleados.push(nuevoEmpleado);

        alert("Empleado agregado con éxito.");
        limpiarCampos();
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function mostrarEmpleados() {
    if (empleados.length === 0) {
        alert("No hay empleados registrados.");
        return;
    }

    let mensaje = "Lista de Empleados: ";
    empleados.forEach(emp => {
        mensaje += "Expediente: " + emp.expediente + " ";
        mensaje += "Nombre: " + emp.nombre + " " + emp.apellido + " ";
        mensaje += "Nacimiento: " + emp.nacimiento + " ";
        mensaje += "Cargo: " + emp.cargo + "   ";
    });

    alert(mensaje);
}

function limpiarCampos() {
    document.getElementById("txtExpediente").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtNacimiento").value = "";
    document.getElementById("txtCargo").value = "";
}