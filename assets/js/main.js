// main.js

// Define Random Number Function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define Div variable as all divs inside grid container
let divs = document.querySelectorAll(".grid-container div");

//Dfine Randomize function
function randomize() {
    console.log(divs.length, "randomiz!");

    //just the grid divs
        divs.forEach(function (div){
           let scale = randomNumber(.5, 1.2);
           let translateX = randomNumber( 0, 50)
           let translateY = randomNumber( 0, 200)
           let rotate = randomNumber(0, 360)
        
            
        })
}
    