// main.js

// Generate a random whole number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random decimal number
function randomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}

// Select all divs inside the grid container
const divs = document.querySelectorAll(".grid-container div");

function randomize() {
    console.log(divs.length, "randomize!");

    divs.forEach(function (div) {
        let scale = randomDecimal(0.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);
        let rotate = randomNumber(0, 360);

        // 50% of the time, do not change the scale
        if (Math.random() > 0.5) {
            scale = 1;
            translateX = randomNumber(0, 80);
            translateY = randomNumber(0, 80);
        }

        div.style.transform =
            `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });
}

// Animate when anywhere on the page is clicked
document.addEventListener("click", randomize);