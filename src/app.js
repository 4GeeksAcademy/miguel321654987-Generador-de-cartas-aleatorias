import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCartaAleatoria() {
    let carta = generarCarta(palos, simbolos);
    asignarSimbolo(carta);
    asignarPalo(carta);
    asignarColor(carta);
}

const palos = ["corazon", "diamante", "pica", "trebol"];
const simbolos = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generarCarta(palos, simbolos) {
    let carta = []
    carta.push(palos[Math.floor(Math.random() * palos.length)]);
    carta.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
    return carta;
}

let paloTop = document.getElementById("paloTop");
let simbolo = document.getElementById("simbolo");
let paloDown = document.getElementById("paloDown");

function asignarSimbolo(carta) {
    simbolo.innerHTML = carta[1];
}
function asignarPalo(carta) {
    if (carta[0] === "corazon") {
        paloTop.innerHTML = "♥"
        paloDown.innerHTML = "♥"
    }
    else if (carta[0] === "diamante") {
        paloTop.innerHTML = "♦"
        paloDown.innerHTML = "♦"
    }
    else if (carta[0] === "trebol") {
        paloTop.innerHTML = "♣"
        paloDown.innerHTML = "♣"
    }
    else {
        paloTop.innerHTML = "♠"
        paloDown.innerHTML = "♠"
    }
}

function asignarColor(carta) {
    if (carta[0] === "corazon" || carta[0] === "diamante") {
        paloTop.style.color = "red";
        simbolo.style.color = "red";
        paloDown.style.color = "red";
    }
    else {
        paloTop.style.color = "black";
        simbolo.style.color = "black";
        paloDown.style.color = "black";
    }
}

window.onload = generarCartaAleatoria();
document.getElementById("elBoton").addEventListener("click", generarCartaAleatoria);