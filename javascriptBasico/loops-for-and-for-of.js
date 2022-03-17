var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
//Primera opcion de loops
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//Segunda opcion de loops
for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}
