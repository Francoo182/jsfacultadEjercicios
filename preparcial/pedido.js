const ErrorGenerico = require("./error");
const error = require("./error");
class Pedido {
  constructor(id, cliente, producto, estado = "pendiente") {
    this.id = id;
    this.cliente = cliente;
    this.producto = producto;
    this.estado = estado;
  }

  actualizarEstado(nuevoEstado){
    const estadosValidos = ["pendiente","asignado","en ruta","entregado","cancelado"]
    if(!estadosValidos.some(nuevoEstado)){throw new ErrorGenerico("Lo siento el estado que ingreso no es valido", 406);}
    this.estado = nuevoEstado;
  }
}

// método dinámico agregado al prototipo
Pedido.prototype.cancelar = function () {
  this.estado = "cancelado";
};

module.exports = Pedido;