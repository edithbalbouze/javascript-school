//El metodo "push" nos permite agregar uno o mas elementos al final de un array

//array inicial
var numArray = [1,2,3,4,5];
var array = [1,2,3,4,5];

//funcion
function newNum(){
    //agrego elementos
    numArray.push(6,7);
    //reviso array que ahora tiene los numeros agregados
    console.log(numArray);
}
console.log(newNum());

//El metodo "shift" elimina el primer elemento de un array, es decir, elimina el elemento que este en el indice cero (0)

//aplicamos .shift()
var shiftArray = array.shift()

console.log(array);

//El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.

var shiftArray = array.pop();
