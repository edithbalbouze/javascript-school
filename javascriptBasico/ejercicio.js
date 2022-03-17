function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var marca = ["Chevrolet", "Toyota", "Ford", "Tesla", "Audi", "Kia", "Hyundai", "BWM", "Volkswagen", "Renault"];
var modelo = ["Modelo 1", "Modelo 2", "Modelo 3", "Modelo 4", "Modelo 5", "Modelo 6", "Modelo 7", "Modelo 8", "Modelo 9", "Modelo 9",];
var annio = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

for(var i = 0; i < marca.length && i < modelo.length && i < annio.length; i++) {
    var nuevoAuto = new auto(marca[i], modelo[i], annio[i]);
    console.log(nuevoAuto);
}
 