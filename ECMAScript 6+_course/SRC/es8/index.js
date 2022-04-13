// Object.entries, nos va a permitit devolver la clave y los valores de una matriz

const data = {
    frontend: 'Edith',
    backend: 'Francisco',
    desing: 'Ingrid',
}

//como transformo el objeto de arriba en una matriz. Acontinuacion
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Object.values, me devuelve los valores de un objeto a un arreglo
const data1 = {
    frontend: 'Edith',
    backend: 'Francisco',
    desing: 'Ingrid',
}

const values = Object.values(data1);
console.log(values);
console.log(values.length); // cuantos elementos hay en un objeto


//padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string = 'Hello';
console.log(string.padStart(7, 'hi'));
// se añade al inicio la palabra 'hi'
console.log(string.padEnd(12, ' -----'))
//Se añade al final la palabra ' -----'
console.log('food'.padEnd(12, '  -----'))

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const obj = {
    name: 'Edith',
}


//Async await

//Promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


//Forma correcta
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch (error) {
        console.log(error);
    }
}

anotherFunction();