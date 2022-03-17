// un arrays es una estructura de datos y tipo objeto, es un valor que va a guardar mas valores adentro.

var frutas = ["Manzana", "Fresa", "Cereza", "Naranja"];

console.log(frutas[2]);

var masFrutas = frutas.push("Uvas");   //push lo que hace es agregar metodos, elementos al final del array

console.log(frutas);

var ultimo = frutas.pop("Uvas");  // pop elimina el ultimo elemento que existe en el array

console.log(frutas);

var nuevaLongitud = frutas.unshift("Peras"); //unshift agrega metodos, elementos al inicio del array

console.log(frutas);

var borrarFruta = frutas.shift("Peras");  //shift elimina el elemento que este en el inicio del array

console.log(frutas);

var posicion = frutas.indexOf("cereza"); //este nos ayuda a mutar el array, nos ayuda a saber la posicion del elemento que le pasemos al array

