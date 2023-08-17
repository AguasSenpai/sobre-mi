/* Función para el botón de SUMA */

function suma() {

    var op1 = parseFloat(document.getElementById("op1").value);
    var op2 = parseFloat(document.getElementById("op2").value);
    var result = document.getElementById("resultado").innerHTML;

    var result = (op1 + op2).toFixed(8);
    
    if (!document.getElementById("op1").value || !document.getElementById("op2").value) {
        alert("¡Intenta nuevamente! Debes completar ambos campos.");
    } else {
        document.getElementById("resultado").innerHTML = "El resultado es " + result + ".";
    }

}

/* Función para el botón de RESTA */

function resta() {

    var op1 = parseFloat(document.getElementById("op1").value);
    var op2 = parseFloat(document.getElementById("op2").value);
    var result = document.getElementById("resultado").innerHTML;

    var result = (op1 - op2).toFixed(8);
    
    if (!document.getElementById("op1").value || !document.getElementById("op2").value) {
        alert("¡Intenta nuevamente! Debes completar ambos campos.");
    } else {
        document.getElementById("resultado").innerHTML = "El resultado es " + result + ".";
    }

}

/* Función para el botón de MULTIPLICACIÓN */

function multiplicacion() {

    var op1 = parseFloat(document.getElementById("op1").value);
    var op2 = parseFloat(document.getElementById("op2").value);
    var result = document.getElementById("resultado").innerHTML;
    
    var result = (op1 * op2).toFixed(8);
    
    if (!document.getElementById("op1").value || !document.getElementById("op2").value) {
        alert("¡Intenta nuevamente! Debes completar ambos campos.");
    } else {
        document.getElementById("resultado").innerHTML = "El resultado es " + result + ".";
    }

}

/* Función para el botón de DIVISIÓN */

function division() {

    var op1 = parseFloat(document.getElementById("op1").value);
    var op2 = parseFloat(document.getElementById("op2").value);
    var result = document.getElementById("resultado").innerHTML;
    
    var result = (op1 / op2).toFixed(8);
    
    /* Mensaje de alerta si no se completaron ambos campos de operandos */
    if (!document.getElementById("op1").value || !document.getElementById("op2").value) {
        alert("¡Intenta nuevamente! Debes completar ambos campos.");
    } else if (document.getElementById("op2").value == "0") {
        /* Mensaje de alerta si el usuario quiere dividir entre cero */
        alert("Recuerda que una división entre cero resulta en un valor indefinido. Intenta nuevamente con otro divisor.");
    } else {
        document.getElementById("resultado").innerHTML = "El resultado es " + result + ".";
    }

}
