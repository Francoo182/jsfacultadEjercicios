const Pedido = require("./pedido")
const ErrorGenerico = require("./error");
class GestorPedidos{
    #pedidos =[];
    agregarPedido(pedido){
        const duplicado = this.#pedidos.some(p => p.id === pedido.id)
        if(!duplicado) this.#pedidos.push(pedido);
        else throw new ErrorGenerico("Lo siento el pedido ya esta agregado, o quizas ingreso mal el numero de ID", 406)
    }
    agruparPorEstado(){
        return this.#pedidos.reduce((acc, pedido)=>{
            if (!acc[pedido.estado]){throw new ErrorGenerico(`Lo siento el pedido ${pedido.toString()} tiene un estado invalido, verifique nuevamente lo asignado`, 406)}
            acc[pedido.estado].push[pedido]
            return acc;
        },{pendiente:[], asignado: [], enRuta: [], entregado: [], cancelado: []})
    }
    
}