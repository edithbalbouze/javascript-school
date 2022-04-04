// array.flat nos va a permitir devolver uns matriz con cualquier sub-matriz aplanada  (Nos permitr aplanar arreglos)
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat()) //primer nivel


//flat.map  me va a permitir mapear cada elemento, despues pasarle una funcion y aplanarlo segun sea el resultado ()
let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2]));


// trimStart  nos va a permitir eliminar los espacios en blanco de un string
let hello = '       hello world';

console.log(hello);
console.log(hello.trimStart());


// trimEnd   nos va a permitir eliminar espacios en blanco al final del string
let hello1 = 'hello world        ';

console.log(hello1);
console.log(hello1.trimEnd());


//try/catch podemos pasar de forma opcional el parametro de error al valor de "catch". ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
try {

} catch {
    error
}


// fromEntries   va a transformar clave/valor a objeto, es decir, convertir un arreglo en objeto o viseversa
let entries = [["name", "Edith"], ["age", 29]];

console.log(Object.fromEntries(entries));


// Objeto de tipo simbolo, el cual nos permitira acceder a una descripcion
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);