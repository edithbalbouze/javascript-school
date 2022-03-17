function teamMedine(Nombre, Apellido, Rol){
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Rol = Rol;
}

var Nombre = ["Alberto", "Christian", "Daniel", "Francisco", "Edith", "Gabriel", "Gibmyx", "Ingrid", "Jose", "Jose", "Ruben", "Santiago"];
var Apellido = ["Basso", "Fernandez", "Marcano", "Marcano", "Balbouze", "Salazar", "Gomez", "Marcano", "Pereira", "Quilarque", "Arias", "Medina",];
var Rol = ["QA", "Developer", "Developer", "Developer", "QA", "Developer", "Developer", "QA", "QA", "Developer", "Developer", "Developer"];

for (var i = 0; i < Nombre.length && i < Apellido.length && Rol.length; i++){
    var Medine = new teamMedine(Nombre[i], Apellido[i], Rol[i]);
    console.log(Medine);
}