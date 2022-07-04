function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autoNuevo = new auto("Tesla", "Model 3", 2020); //new operador new va a generar una nueva instancia de nuestra funcion constructora. una instancia es generar un objeto que deriva de otro objeto.
var autoNuevo2 = new auto("Tesla", "Model x", 2018);
var autoNuevo3 = new auto("Toyota", "corolla", 2020);

console.log(autoNuevo3);