/* En caso de que el jugador elija piedra */

function jugadaPiedra() {
    
    var nombreUser = document.getElementById("player").value;
    jugadaUser = "piedra";
    
    jugadasPosibles = ["piedra", "papel", "tijera"];
    jugadaPC = jugadasPosibles[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + Math.ceil(0))];

    if (nombreUser == "") {
        alert("¡No tan rápido! La computadora quiere saber el nombre de su oponente. (´･ᴗ･ ` )")
    } else if (jugadaUser == jugadaPC) {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
    } else if (jugadaPC == jugadasPosibles[1]) {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
    } else {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
    }

}

/* En caso de que el jugador elija papel */

function jugadaPapel() {
    
    var nombreUser = document.getElementById("player").value;
    jugadaUser = "papel";
    
    jugadasPosibles = ["piedra", "papel", "tijera"];
    jugadaPC = jugadasPosibles[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + Math.ceil(0))];

    if (nombreUser == "") {
        alert("¡No tan rápido! La computadora quiere saber el nombre de su oponente. (´･ᴗ･ ` )")
    } else if (jugadaUser == jugadaPC) {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
    } else if (jugadaPC == jugadasPosibles[2]) {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
    } else {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
    }

}

/* En caso de que el jugador elija tijera */

function jugadaTijera() {
    
    var nombreUser = document.getElementById("player").value;
    jugadaUser = "tijera";
    
    jugadasPosibles = ["piedra", "papel", "tijera"];
    jugadaPC = jugadasPosibles[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + Math.ceil(0))];

    if (nombreUser == "") {
        alert("¡No tan rápido! La computadora quiere saber el nombre de su oponente. (´･ᴗ･ ` )")
    } else if (jugadaUser == jugadaPC) {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
    } else if (jugadaPC == jugadasPosibles[0]) {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
    } else {
        document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
        document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
    }

}