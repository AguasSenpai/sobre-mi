
function juegoppot(x) {

    var nombreUser = document.getElementById("player").value;
    var intentosRestantes = 5;
    let jugadasPosibles = ["piedra", "papel", "tijera"];
    jugadaPC = jugadasPosibles[Math.floor(Math.random() * (Math.floor(2) - Math.ceil(0) + 1) + Math.ceil(0))];
    let resultadosPosibles = ["VICTORIA", "EMPATE", "DERROTA"];
    let victorias = document.getElementById("victorias").value;
    let derrotas = document.getElementById("derrotas").value;

    if (nombreUser == "") {

        alert("¡No tan rápido! La computadora quiere saber el nombre de su oponente. (´･ᴗ･ ` )")

    } else if (x == piedra) {
            
        jugadaUser = jugadasPosibles[0];
        if (intentosRestantes > 0) {
            if (jugadaUser == jugadaPC) {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 4;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 3;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 2;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 0;
                };
            } else if (jugadaPC == jugadasPosibles[1]) {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 4;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 3;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 2;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 1;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 0;
                    derrotas = derrotas + 1;
                };
            } else if (jugadaPC == jugadasPosibles[2]) {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 4;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 3;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 2;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 1;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 0;
                    victorias = victorias + 1;
                };
            };
        };

        if (intentosRestantes == 0) {

            if (victorias < 3 && derrotas < 3) {
                document.getElementById("resultadoFinal").innerHTML = "¡Ha sido empate! Actualiza la página para iniciar otra partida.";
            } else if (victorias > derrotas) {
                document.getElementById("resultadoFinal").innerHTML = "¡Eres el ganador! Actualiza la página para iniciar otra partida.";
            } else if (derrotas > victorias) {
                document.getElementById("resultadoFinal").innerHTML = "¡Eres el perdedor! Actualiza la página para iniciar otra partida.";
            };

        };

    } else if (x = papel) {

        jugadaUser = jugadasPosibles[1];
        if (intentosRestantes > 0) {
            if (jugadaUser == jugadaPC) {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 4;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 3;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 2;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 0;
                };
            } else if (jugadaPC == jugadasPosibles[2]) {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 4;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 3;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 2;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 1;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 0;
                    derrotas = derrotas + 1;
                };
            } else {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 4;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 3;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 2;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 1;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 0;
                    victorias = victorias + 1;
                };
            };
        };

        if (intentosRestantes == 0) {

            if (victorias < 3 && derrotas < 3) {
                document.getElementById("resultadoFinal").innerHTML = "¡Ha sido empate! Actualiza la página para iniciar otra partida.";
            } else if (victorias > derrotas) {
                document.getElementById("resultadoFinal").innerHTML = "¡Eres el ganador! Actualiza la página para iniciar otra partida.";
            } else if (derrotas > victorias) {
                document.getElementById("resultadoFinal").innerHTML = "¡Eres el perdedor! Actualiza la página para iniciar otra partida.";
            };

        };

    } else {

        jugadaUser = jugadasPosibles[2];
        if (intentosRestantes > 0) {
            if (jugadaUser == jugadaPC) {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡Ha sido un empate, " + nombreUser + "!";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 4;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 3;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 2;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[1];
                    intentosRestantes = 0;
                };
            } else if (jugadaPC == jugadasPosibles[0]) {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡Has perdido! Mejor suerte la próxima, " + nombreUser + ".";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 4;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 3;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 2;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 1;
                    derrotas = derrotas + 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[2];
                    intentosRestantes = 0;
                    derrotas = derrotas + 1;
                };
            } else {
                document.getElementById("jugadaPC").innerHTML = "Tu oponente ha elegido " + jugadaPC + ".";
                document.getElementById("resultadoJugada").innerHTML = "¡La victoria es tuya, " + nombreUser + "!";
                if (document.getElementById("resultadoJugadaUno").innerHTML == "") {
                    document.getElementById("resultadoJugadaUno").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 4;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaDos").innerHTML == "") {
                    document.getElementById("resultadoJugadaDos").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 3;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaTres").innerHTML == "") {
                    document.getElementById("resultadoJugadaTres").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 2;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaCuatro").innerHTML == "") {
                    document.getElementById("resultadoJugadaCuatro").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 1;
                    victorias = victorias + 1;
                } else if (document.getElementById("resultadoJugadaCinco").innerHTML == "") {
                    document.getElementById("resultadoJugadaCinco").innerHTML = resultadosPosibles[0];
                    intentosRestantes = 0;
                    victorias = victorias + 1;
                };
            };
        };

        if (intentosRestantes == 0) {

            if (victorias < 3 && derrotas < 3) {
                document.getElementById("resultadoFinal").innerHTML = "¡Ha sido empate! Actualiza la página para iniciar otra partida.";
            } else if (victorias > derrotas) {
                document.getElementById("resultadoFinal").innerHTML = "¡Eres el ganador! Actualiza la página para iniciar otra partida.";
            } else if (derrotas > victorias) {
                document.getElementById("resultadoFinal").innerHTML = "¡Eres el perdedor! Actualiza la página para iniciar otra partida.";
            };

        };

    };

};