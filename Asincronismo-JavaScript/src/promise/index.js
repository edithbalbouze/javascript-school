// Aqui la promesa se ejecuta al cargar el archivoconst somethingWillHappen = () => {
    
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!')
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


//Aqui la promesa no se ejecuta hasta que se llame a la funcion

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout (() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error ('Whooop!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// Como correr varias promesas al mismo tiempo, o encadenadas.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.log(err);
    })