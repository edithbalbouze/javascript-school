// .replace solo encuentra el primer elemento y lo replaza, no todos los elementos
 const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

 const replacedString = string.replace("JavaScript", "Python");
 console.log(replacedString);


// .replaceAll
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);


// Metodos privados se indica con #
class Message {
    #show(val){
    };
    get #add(val){
        ...
    }
}
// hacer la instancia de la clase creada anteriormente
const message = new Message();
message.show('Hola!');


// Promise Any: es un objeto global de promise cuyo argumento va a ser la forma de un array de promesas que vamos a pasarle gestionando y capturando la respuesta de la primera que sea resuelta de forma satisfactoria.
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


// WeakRef (element): un objeto WeakRef permite le mantener una referencia debil a otro objeto sin evitar que este objeto sea pasado o recogido por el garbash colector.
class anyClass {
    constructor(element){ 
        this.ref = new WeakRef(element)
    }
    //{...} continuar con la logica, podemos usar este llamado para evitar que este objeto sea recogido por el manejador de la basura (liberar elementos de la memoria)
}


// Nuevos operadores logicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1);

let isTrue2 = undefined;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse2);