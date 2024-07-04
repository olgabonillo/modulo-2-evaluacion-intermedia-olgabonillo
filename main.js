'use strict';
/*
1. Crear formulario
2. Recoger información cuando la usuaria haga click para saber el número que ha puesto
3. Si el numero es mayor que 100, mostrar un mensaje indicando que ha puesto un número mayor que el máximo permitido
*/

const submitButton = document.querySelector(".js-submit");
const numberInput = document.querySelector(".js-number");
const clueMessage = document.querySelector(".js-clue");
const counterMessage = document.querySelector(".js-counter");

let attemps = 0; //variable acumulador

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log("Número aleatorio: ", randomNumber);

function handleClick(ev) {
    ev.preventDefault();


    const userNumber = parseInt(numberInput.value);
    
    if (!userNumber) {
        clueMessage.innerHTML = "Por favor, escribe un número"
    } else if (userNumber > randomNumber) {
        clueMessage.innerHTML = "Pista: Demasiado alto!";
    } else if (userNumber < randomNumber) {
        clueMessage.innerHTML = "Pista: Demasiado bajo!";
    } else if (userNumber === randomNumber) {
        clueMessage.innerHTML = "¡Has ganado, campeona!";
    } else if (userNumber > 100 || userNumber <1){
        clueMessage.innerHTML = "Introduce un número válido";
    }
    //Actualizar número de intentos

    attemps = attemps + 1;
    counterMessage.innerHTML = `Número de intentos ${attemps}`;
}

submitButton.addEventListener("click", handleClick);
