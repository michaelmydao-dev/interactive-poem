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
           let rotate = randomNumber(0, 360);

           // 50% of the time ...
           if (Math.random() > .5) {
            scale = 1; // dont affect scale
            translateX = randomNumber (0,80);
            translateY = randomNumber (0,80);
           }  

            div.style.transform = `scale(${scale}) translate($
            {translateX}%${translateY}%) rotate(${rotate}deg)`;

     
        })
}
    
// Add event listener to call randomizer function 
document.addEventListener("click", randomize);

