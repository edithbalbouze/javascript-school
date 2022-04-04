// Operador de reposo, puede extraer las propiedades de un objeto que aun no se ha construido
const obj = {
    name: 'Edith',
    age: 29,
    country: 'VE',
};

let { name, ...all} = obj;
console.log(name, all);
// de esta forma tambien podemos establecer lo que necesitamos de un objeto.



// propiedades de propagacion, se podra unir, uno, dos , tres o cuantos elementos queramos de objetos a un nuevo objeto.
const obj1 = {
    name: 'Edith',
    age: 29,
}

const obj2 = {
    ...obj1,
    country: 'VE'
}

console.log(obj2)



// promise.finally , podemos saber cuando a terminado el llamado y poder ejecutar alguna funcion o logica de codigo segun sea el caso.
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        //? resolve('Hello World')
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo')) // permite ejecutar un bloque de codigo segun sea el caso.



// Agrupar bloques de reget y como podemos acceder a cada uno de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month, day);