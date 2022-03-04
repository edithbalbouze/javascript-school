// las condiciones son reglas que se aplican para validar si algo es verdadero o falso y podamos generar ciertas acciones con eso

// Tipos de condicionales => if, else if, switch, ternario.

if (true){
    console.log("Hola"); //todo lo que va dentro de () de ser verdad, sino, no pasa esa condicion
} else { //si lo de arriba no es verdadero
    console.log("Soy falso"); 
}

if (true){
    console.log("Hola");
} else if (false){
    console.log("soy falso");
} else{

}

//ejemplo

var edad = 18;

if (edad === 18){
    console.log("Puedes votar, es tu primera votacion");
} else if (edad > 18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}