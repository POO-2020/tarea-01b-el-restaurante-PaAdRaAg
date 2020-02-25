export default class Fecha {
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año){
        this.fecha = new Date(año, mes -1, dia);
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    }

    getAños(){
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear();
        return (`${añosTranscurridos} años.`);
    }

    getMeses() {
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear();
        return (`${añosTranscurridos * 12} meses.`); 
    }

    getSemanas(){
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear();
        return (`${añosTranscurridos * 52} semanas.`);
    }

    getDias(){
        let fechaActual = new Date(Date.now());
        let añosTranscurridos = fechaActual.getFullYear() - this.fecha.getFullYear();
        return (`${añosTranscurridos * 365} días`);
    }

    getFecha(){
        return (`${this.fecha.getDate()}/${this.meses[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`);
    }

    getDiaFecha(){
        return(`${this.diaSemana[this.fecha.getDay()]}`);
    }
}