// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const span = document.querySelector("span");
const range = document.querySelector(".jsRange");
const input = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");
const result = document.querySelector(".result");
const wonOrLost = document.querySelector(".winOrLose");

function hadnleChange(event) {
    event.preventDefault();
    const max = range.value;
    span.innerHTML = `${max}`;
}

function handleSubmit(event) {
    event.preventDefault();
    const maxRange = range.value;
    const userNum = parseInt(input.value, 10);
    const randomNum = Math.floor(Math.random() * (maxRange - 0 + 1));

    if (isNaN(userNum) || userNum > maxRange || userNum < 0) {
        alert("The number is either empty or out of range.");
        return false;
    }
    if (randomNum === userNum) {
        result.innerHTML = `You chose: ${userNum}, the machine chose: ${randomNum}`;
        wonOrLost.innerHTML = `You won!`;
    } else {
        result.innerHTML = `You chose: ${userNum}, the machine chose: ${randomNum}`;
        wonOrLost.innerHTML = `You lost!`;
    }
}

function init() {
    range.addEventListener("input", hadnleChange);
    guessSubmit.addEventListener("click", handleSubmit);
}

init();
