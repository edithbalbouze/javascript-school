var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },

];
//El metodo "find" nos va a ayudar a encontrar algo dentro del articulo de arriba, al igual que los anteriores el crea un nuevo array para meter los nuevo valores y no modifica el array original. valida un true o un false. Este metodo retorna el primer elemento de un array que cumple con una condicion definida en un nuevo array.

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo);

//otro metodo es el "forEach", este metodo no va a generar un nuevo array, simplemente va hacer un filtrado del array original sin modificarlo y regresa resultados. Este metodo ejecuta la funcion indicada una vez por cada elemento 

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//otro metodo es el "some" nos va a regresar una validacion de verdadero o falso para articulos que cumplan esa validacion, tambien genera un nuevo array.

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);