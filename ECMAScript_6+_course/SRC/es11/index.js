//dinamycImport Importa elementos de forma dinamica para poder llamar piezas de codigo que nos ayudara a optimizar nuestro codigo.
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});


// Big INT: Permite trabajar con numeros mayores a 2^53
//1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

//2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);


// Promise All Settled: la cual nos va a devolver una promesa que se resuelve despues que todas las promesas dadas se hayan cumplido o rechazado en una serie de objetos que se describe el resultado de cada promesa.
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    git 

//Global This
console.log(window);
console.log(globalThis);


//Nuevo operador logico: null operator : nos devuelve su operando del lado derecho cuando el operador del lado izquierdo es nulo o indefinido y de lo contrario devuelve su operador del lado izquierdo.
const fooo = null ?? 'defaul string';
console.log(fooo);

const fooo1 = 'not null' ?? 'defaul string';
console.log(fooo1);


//Optional chaining: cuando se trabaja con arreglos y objetos y quieres acceder a cada uno de ellos, esta nueva propiedad en es11 vamos a poder trabajar diferentes niveles de estos recursos.
const user = {};

console.log(user?.profile?.email);

if (user?.profile?.enail){
    console.log('email')
}else{
    console.log('fail')
}
//podemos validar cuando algo  todavia no esta disponible y despues poder obtener una opcion

