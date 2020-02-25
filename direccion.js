export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio){
        this.calle = calle;
        this.numeroExterior = numeroExterior;
        this.numeroInterior = numeroInterior;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
        this.ciudad = ciudad;
        this.municipio = municipio;
    }
    getFormatoCorto(){
        return (`Calle ${this.calle} #${this.numeroExterior}`)
    }

    getFormatoExtendido(){
        return (`Calle ${this.calle} Num.Ext.${this.numeroExterior} Num.Int.${this.numeroInterior}, colonia${this.colonia}. Cod.Post.${this.codigoPostal} ${this.ciudad} ${this.municipio}`)
    }
}