class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
  }
}
 
class ItemFactura {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = parseInt(cantidad);
  }
 
  subtotal() {
    return this.producto.precio * this.cantidad;
  }
}
 
class Factura {
  constructor(cliente, descuento, impuesto) {
    this.cliente = cliente;
    this.descuento = parseFloat(descuento);
    this.impuesto = parseFloat(impuesto);
    this.items = [];
  }
 
  agregarItem(item) {
    this.items.push(item);
  }
 
  calcularSubtotal() {
    return this.items.reduce((acc, item) => acc + item.subtotal(), 0);
  }
 
  calcularDescuento() {
    return this.calcularSubtotal() * (this.descuento / 100);
  }
 
  calcularImpuesto() {
    return (this.calcularSubtotal() - this.calcularDescuento()) * (this.impuesto / 100);
  }
 
  calcularTotal() {
    return this.calcularSubtotal() - this.calcularDescuento() + this.calcularImpuesto();
  }
 
  resumen() {
    let detalle = this.items.map(item => `- ${item.producto.nombre} x${item.cantidad} = ¢${item.subtotal()}`).join('\n');
    return `Cliente: ${this.cliente}\n\nDetalle:\n${detalle}\n\nSubtotal: ¢${this.calcularSubtotal()}\nDescuento (${this.descuento}%): -¢${this.calcularDescuento()}\nImpuesto (${this.impuesto}%): +¢${this.calcularImpuesto()}\nTotal a pagar: ¢${this.calcularTotal()}`;
  }
}
 
const listaItems = [];
 
function agregarProducto() {
  const nombre = document.getElementById("nombreProducto").value;
  const precio = document.getElementById("precioProducto").value;
  const cantidad = document.getElementById("cantidadProducto").value;
 
  if (!nombre || !precio || !cantidad) {
    alert("Completa todos los campos del producto.");
    return;
  }
 
  const producto = new Producto(nombre, precio);
  const item = new ItemFactura(producto, cantidad);
  listaItems.push(item);
 
  const li = document.createElement("li");
  li.textContent = `${nombre} - ¢${precio} × ${cantidad} = ¢${item.subtotal()}`;
  document.getElementById("detalleProductos").appendChild(li);
 
  document.getElementById("nombreProducto").value = "";
  document.getElementById("precioProducto").value = "";
  document.getElementById("cantidadProducto").value = "";
}
 
function generarFactura() {
  const cliente = document.getElementById("cliente").value;
  const descuento = document.getElementById("descuento").value || 0;
  const impuesto = document.getElementById("impuesto").value || 0;
 
  if (!cliente || listaItems.length === 0) {
    alert("Agrega el nombre del cliente y al menos un producto.");
    return;
  }
 
  const factura = new Factura(cliente, descuento, impuesto);
  listaItems.forEach(item => factura.agregarItem(item));
 
  document.getElementById("resumenFactura").textContent = factura.resumen();
}