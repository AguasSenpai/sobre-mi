

/* En caso de que el jugador elija piedra */

function jugadaPiedra() {
    
    var nombreUser = document.getElementById("player").value;
    jugadaUser = "piedra";
    let i = 0;
    jugadasPosibles = ["piedra", "papel", "tijera"];
    jugadaPC = jugadasPosibles[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + Math.ceil(0))];
    resultadosPosibles = ["VICTORIA", "EMPATE", "DERROTA"];

    if (i < 5) {
        if (nombreUser == "") {
            alert("¡No tan rápido! La computadora quiere saber el nombre de su oponente. (´･ᴗ･ ` )")
        } else if (jugadaUser == jugadaPC) {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[1];
            }
        } else if (jugadaPC == jugadasPosibles[1]) {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[2];
            }
        } else {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[0];
            }
        }    
    };
    i++;
    
}

/* En caso de que el jugador elija papel */

function jugadaPapel() {
    
    var nombreUser = document.getElementById("player").value;
    jugadaUser = "papel";
    let i = 0;
    jugadasPosibles = ["piedra", "papel", "tijera"];
    jugadaPC = jugadasPosibles[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + Math.ceil(0))];
    resultadosPosibles = ["VICTORIA", "EMPATE", "DERROTA"];

    if (i < 5) {
        if (nombreUser == "") {
            alert("¡No tan rápido! La computadora quiere saber el nombre de su oponente. (´･ᴗ･ ` )")
        } else if (jugadaUser == jugadaPC) {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[1];
            }
        } else if (jugadaPC == jugadasPosibles[2]) {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[2];
            }
        } else {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[0];
            }
        }
    }
    i++;
    

}

/* En caso de que el jugador elija tijera */

function jugadaTijera() {
    
    var nombreUser = document.getElementById("player").value;
    jugadaUser = "tijera";
    let i = 0;
    jugadasPosibles = ["piedra", "papel", "tijera"];
    jugadaPC = jugadasPosibles[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + Math.ceil(0))];
    resultadosPosibles = ["VICTORIA", "EMPATE", "DERROTA"];

    if (i < 5) {
        if (nombreUser == "") {
            alert("¡No tan rápido! La computadora quiere saber el nombre de su oponente. (´･ᴗ･ ` )")
        } else if (jugadaUser == jugadaPC) {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[1];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[1];
            }
        } else if (jugadaPC == jugadasPosibles[0]) {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[2];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[2];
            }
        } else {
            document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
            document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
            if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[0];
            } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[0];
            }
        }
    }
    i++;

}