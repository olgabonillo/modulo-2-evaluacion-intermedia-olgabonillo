'use strict';
const pruebaButton = document.querySelector(".js-submit");
const formulario = document.querySelector(".js-form");
const inputPista = document.querySelector(".js-input-pista");
const inputIntento = document.querySelector(".js-input-intento");

/*
1. Crear formulario
2. Recoger información cuando la usuaria haga click para saber el número que ha puesto
3. Si el numero es mayor que 100, mostrar un mensaje indicando que ha puesto un número mayor que el máximo permitido
*/
pruebaButton.addEventListener("click", handleClick);
const handleClick = (event) => {
    event.preventDefault();
    console.log("ha hecho click en el botón prueba")
}

const numbers = () => {
    const maxNumber = 100;
}


function randomNumber(maxNumber) { 
    return Math.ceil(Math.random() * max);
}

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

/*
1.Si la usuaria escribe el número correcto del 1 al 100, le daremos la enhorabuena
2.Si no, le dejaremos volverlo a intentar
*/

function numeroAleatorio1() {
    const userNumber = parseInt(document.querySelector("js-submit").value);
    const resultDiv = document.querySelector(".js-result");

    if (isNaN(number) || number < 1 || number > 100) {
        resultDiv.innerHTML = "El número debe estar entre el 1 y 100.";
        return;
    }

    if (number === numeroAleatorio1) {
        resultDiv.innerHTML = "¡Has ganado, campeona!";
    } else if (number < numeroAleatorio1) {
        resultDiv.innerHTML = "¡Demasiado bajo!";
    } else {
        resultDiv.innerHTML = "¡Demasiado alto!";
    }
}