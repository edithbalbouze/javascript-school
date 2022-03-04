var respuestaCorrecta = false;

while (!respuestaCorrecta){
  var resultado = prompt("Cuanto es 2 + 2?");

  if (resultado == 4){
    respuestaCorrecta = true
   alert ("Felicitaciones es correcto");
  } else{ 
   alert("Vuelve a intentar");
  }
}