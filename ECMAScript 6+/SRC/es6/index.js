// ECMAScript es la especificacion del lenguaje, y JavaScript es el lenguaje de programacion que utiliza esta especificacion para trabajar sobre estas caracteriscas.

function newfunction(name, age, country) {
    var name = name || 'Edith';
    var age = age || 29;
    var country = country || 'Venezuela';
    console.log(name, age, country);
}

//ES6

function newfunction2(name = 'Edith', age = 29, country = 'Venezuela'){ //es6
    console.log(name, age, country);
}

newfunction2();
newfunction2('Francisco', 25, 'Venezuela');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`; //ES6
console.log(epicPhrase2);

//Multilineas es6

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" + "otra frase epica que necesitamos.";

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;  //ES6

console.log(lorem);
console.log(lorem2);

//Destructuracion de elementos

let person = {
    'name': 'Edith',
    'age': 29,
    'country': "VE",
}

console.log(person.name, person.age);

let { name } = person;
console.log(name);

// Spread Operator

let team1 = ['Edith', 'Francisco', 'Ingrid'];
let team2 = ['Jesus', 'Maria', 'Eucaris'];

let education = ['Matilde', ...team1, ...team2];

console.log(education);


//EJEMPLO CON LET
{
    var globalVar = "Global Var";
}
// Es global no importa donde se este asignando

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
// Solo esta disponible en el bloque en el que fue definido
console.log(globalVar);


// EJEMPLO CON CONST

const a = 'b'; // NO permite cambiar su valor
a = 'a';


//Propiedad de objetos mejorada
let name = 'Edith';
let age = 29;

obj = {name: name, age: age}; // ES Crear objeto

obj2 = {name, age}; //ES6 se crean objetos mas amigables.
console.log(obj2);


//arrow function (Funciones de tipo flecha)
const names = [
    {name: 'Edith', age: 29},
    {name: 'Francisco', age: 35},
]

let listOfNames = names.map(function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name)); // Arrow function
const listOfNames3 = (name, age, country) => {
    
}

const listOfNames4 = name => {

}

const square = num => num * num;


//Promesas (se trabaja el asincronismo, es decir unos evento que no se ejecunto al mismo tiempo
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
//    .then(() => console.log('hola'))
    .catch(error => console.log(error));


// Clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//MODULOS (Import, Export)
import {hello} from './module';

hello();

// GENERATOR (es una funcion especial que retorna una serie de valores, segun el algoritmo definido)
function* helloWorld (){
    if (true) {
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);