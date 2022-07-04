var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },

];
//Primer metodo es filter, ayuda a filtrar ciertas cosas, valida si algo es verdad o falso y lo va a meter en un nuevo array y no modifica el array original. Este metodo crea un nuevo array con los elementos que se paso como parametro y que cumplan con la condicion definida.
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
    
});

console.log(articulosFiltrados);

//Segundo metodo es el de map, me ayuda a mapear ciertos articulos, este metodo genera un nuevo array y no modifica el array original. Este metodo crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos);
