//  ARRAY

var frutas = ["Manzana", "Fresa", "Cereza", "Naranja"];

function printFirstElement(arreglo){
    console.log(arreglo[0]);
}

printFirstElement(frutas);

function printAllElement(arreglo){
    for(var i = 0; i <= arreglo.length - 1; i++){
        console.log(arreglo[i]);
    }
}
printAllElement(frutas);

// OBJETOS
var user = {
    firsName: "Paullete",
    lastName: "Malcoum",
    age:21,
}

function printAllElementObjets(objeto){
    for(var key in user){
        console.log(user[key]);
    }
}

printAllElementObjets(user);
