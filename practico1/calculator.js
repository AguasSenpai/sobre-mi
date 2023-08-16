const op1 = parseFloat(document.getElementById("op1"));
const op2 = parseFloat(document.getElementById("op2"));
let resultado;

function suma() {

    if (isNaN(op1) || isNaN(op2)) {
        alert("¡Intenta nuevamente! Uno de los valores introducidos no es un número.");
    } else {
        resultado = op1 + op2;
        document.getElementById("resultado").innerHTML = "El resultado es " + resultado + ".";
    }

}

function resta() {

    if (isNaN(op1) || isNaN(op2)) {
        alert("¡Intenta nuevamente! Uno de los valores introducidos no es un número.");
    } else {
        resultado = op1 - op2;
        document.getElementById("resultado").innerHTML = "El resultado es " + resultado + ".";
    }

}

function multiplicacion() {

    if (isNaN(op1) || isNaN(op2)) {
        alert("¡Intenta nuevamente! Uno de los valores introducidos no es un número.");
    } else {
        resultado = op1 * op2;
        document.getElementById("resultado").innerHTML = "El resultado es " + resultado + ".";
    }

}

function division() {

    if (isNaN(op1) || isNaN(op2)) {
        alert("¡Intenta nuevamente! Uno de los valores introducidos no es un número.");
    } else {
        resultado = op1 / op2;
        document.getElementById("resultado").innerHTML = "El resultado es " + resultado + ".";
    }

}
