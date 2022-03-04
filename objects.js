var miAuto = {
    marca: "Chevroler",
    modelo: "Silverado",
    annio: 2015,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);  //el this es una variable que hace referencia al objeto.
    }
};
//console.log(miAuto);

//console.log(miAuto.marca);

//console.log(miAuto.annio);

miAuto.detalleDelAuto();

