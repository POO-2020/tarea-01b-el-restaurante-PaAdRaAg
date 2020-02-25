export default class Tiempo{
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     */
        constructor(hora, minutos){
            this.hora = hora;
            this.minutos = minutos;
            this.periodo = ["am","pm"];
        }
        getFormato12(){
            if (this.hora>=12 && this.hora<=23){
                if(this.hora==12){
                    return (`${this.hora}:${this.minutos} ${this.periodo[1]}`);
                }
                else{
                    var hora = this.hora-12;
                }
                
                return (`${hora}:${this.minutos} ${this.periodo[1]}`);
            }
            else if (this.hora==24){
    
                return (`00:${this.minutos} ${this.periodo[0]}`);
            }
            else{
                return (`${this.hora}:${this.minutos} ${this.periodo[0]}`);
        }
    }
        getFormato24(){
            if(this.periodo === "pm"||this.periodo === "PM"||this.periodo === "Pm"){this.hora = this.hora + 12}
            return(`${this.hora}:${this.minutos}`);
        }
    }