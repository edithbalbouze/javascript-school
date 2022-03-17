//declarar una variable
var miNombre;

//inicializar una variable
miNombre = "Edith";

//declarar e inicializar variable

var miNombre = "Edith";

//que pasa si llamo primero la variable y despues la inicializo
console.log(miNombre);

var miNombre = "Edith";
//undefined
//undefined

//ejemplo de cuando se crea un hoisting con variables con el ejemplo anterior

var miNombre = undefined;

console.log(miNombre);

miNombre = "Edith";
//undefined
//'edith'

//otro ejemplo si concateno un string
var miNombre = undefined;

console.log(miNombre + "soy ese hoisting");

miNombre = "Edith";
//undefined soy ese hoisting
//'Edith'

//hoisting con funcion

hey();

function hey() {
    console.log("hola" + miNombre);
}

var miNombre = "Edith";

//si llamamos a una funcion antes de declararla, si vamos a obtener el resultado que esperamos, siempre y cuando las variables esten declaradas e inicializadas antes de mandar a llamar esa funcion.

//todas las funciones que vaya a utilizar tengo que declararlas al inicio de mi codigo