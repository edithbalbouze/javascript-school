var jugador1 = "Piedra";
var jugador2 = "Tijera";

var resultado = jugador1+"-"+jugador2;

switch (resultado) {
    case "Piedra-Piedra": 
    console.log("Hay empate");
    break;
    case "Piedra-Tijera": 
    console.log("Gano el jugador 1");
    break;
    case "Piedra-Papel": 
    console.log("Gano el jugador 2");
    break;
    case "Papel-Papel": 
    console.log("Hay empate");
    break;
    case "Papel-Piedra": 
    console.log("Gano el jugador 1");
    break;
    case "Papel-Tijera": 
    console.log("Gano el jugador 2");
    break;
    case "Tijera-Tijera": 
    console.log("Hay empate");
    break;
    case "Tijera-Piedra": 
    console.log("Gano el jugador 2");
    break;
    case "Tijera-Papel": 
    console.log("Gano el jugador 1");
    break;
}
