//Funciones declarativas

function miFuncion(){
    return 3;  
}

//Funciones de expresion
var miFuncion2 = function(a,b) {
    return a + b;
}

var myOtherFuntion = miFuncion2

//practica

function saludarEstudiantes(estudiante){
    console.log(estudiante);
}

saludarEstudiantes("Edith");

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
}

saludarEstudiantes("Edith")

//NOTA IMPORTANTE Parametro es una variable que está en la definición de una función, argumento son los datos que se le pasan a los parametros de una función