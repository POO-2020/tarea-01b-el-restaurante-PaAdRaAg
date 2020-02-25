import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import ElementoPedido from "./elementoPedido.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";

export default class Pedido {
    /**
     * 
     * @param {Fecha} fecha
     * @param {Tiempo} hora
     * @param {cliente} cliente 
     * @param {elementosPedidos} elementosPedidos
     */
    constructor(fecha,hora,cliente){
        this.fecha = fecha;
        this.hora = hora;
        this.cliente = cliente;
        this.elementosPedidos = new Array();
    }
    
    getResumen(){
        return `${this.fecha.getFecha()} ${this.hora.getFormato12()} ${this.getNumeroElementos()} Elementos con ${this.getNumeroProductos()} productos. Total: ${this.getCostoTotal()}`;
    }

    getNumeroElementos(){
        return (this.elementosPedidos.length);
    }

    getNumeroProductos(){
        var nProductos = 0;
        this.elementosPedidos.forEach(elemento => {
            nProductos+=elemento.cantidad;
        });
        return nProductos;
    }

    getCostoTotal(){
        var total = 0;
        this.elementosPedidos.forEach(elemento => {
            total += elemento.cantidad * elemento.producto.precio.valor;
        });
        return new Precio(total).getPrecio();

    }

    agregarElemento(elemento){
        this.elementosPedidos.push(elemento)
    }
    
    listarElementos(){
        this.elementosPedidos.forEach(elemento=>{
            console.log(elemento.getDescripcion())
        });
    }
}