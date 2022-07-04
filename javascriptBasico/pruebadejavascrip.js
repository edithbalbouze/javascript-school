//Variables y operaciones

var nombre = "Paulette";
var apellido = "Malcoum";
var nombreUsuario = "mp2022";
var edad = 21;
var email = "mp2022@example.com";
var mayorEdad = true;
var dineroAhorrado = 5000;
var deuda = 150;
var nickName = "Habibi";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var dineroReal = dineroAhorrado - deuda;
console.log(dineroReal);


//Funciones

function newFuncion(nombreCompleto, nickname){
    console.log(`Mi nombre es ${nombreCompleto} , pero prefieron que me digas ${nickName} .`);
}

newFuncion(nombreCompleto, nickName);

//Condicionales

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{

}


//Ciclos
var i = 0;

while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

i = 10;

while (i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}