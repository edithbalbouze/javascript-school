//FUNCIONES

const name = "paulette";
const lastName = "Malcoum";
const completeName = name + " " + lastName;
const nickName = "habibi";

function convitiendoFuncion(completeName, nickName){
    console.log(`Mi nombre es ${completeName}, pero prefieron que me digas ${nickName}.`);
}

convitiendoFuncion(completeName, nickName);


//CONDICIONALES

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "free"){
    console.log("Solo puedes tomar los cursos gratis");
    return ;
}
if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return ;
}
if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return ;
}
if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return ;
}
