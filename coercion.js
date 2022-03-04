//coercion implicita 
var a = 4 + "7";

typeof a //string

var b = 4 * "7"; 

typeof b //number

//coercion explicita
var c = 20;
var d = a + "";

console.log(d); //20

typeof d //string

var e = String(a); //aplicamos la coercion explicita cpn la palabra string obligando que "a" que es un numero, sea un string.

console.log(e); //20
