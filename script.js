//Global Variables
let sliderInput = document.getElementById("sliderInput");
let sliderOutput = document.getElementById("sliderOutput");
let drawArea = document.getElementById("drawArea");
let buttonWhite = document.getElementById("white");
let buttonRainbow = document.getElementById("rainbow");
let buttonErase = document.getElementById("eraser");


sliderOutput.textContent = `${sliderInput.value}x${sliderInput.value}`;


//function that changes the displayed value of the slider.
sliderInput.oninput = function() {
    sliderOutput.textContent = `${this.value}x${this.value}`;
    sliderValue = this.value;
}
let sliderValue = sliderInput.value;

//function that creates squares based on the input value from the slider
function createSquares () {

    let drawArea = document.getElementById("drawArea");
    const parent = document.getElementById("drawArea");

    while (parent.firstChild) {
    parent.firstChild.remove()
    }

    for (i = 0; i < (sliderValue * sliderValue); i++) {
        let column = document.createElement("div");
        drawArea.appendChild(column);
        column.classList.add("square");
        column.style.height = 30 / sliderValue + "em";
        column.style.width = 30 / sliderValue + "em";
    }
};


function randomColor() {
    let random = Math.floor(Math.random()*16777215).toString(16);
    let color = "#" + random;
    return color;
}

//function that changes color of Square to white when hovering
function colorWhite() {

    let whiteColor = document.getElementsByClassName("square");

    for (i = 0; i < whiteColor.length; i++) {
          whiteColor[i].onmouseover = (e) => {
              e.target.style.backgroundColor = "white";
          };
    };
};

//function that erases color of Square when hovering
function colorErase() {

    let eraseColor = document.getElementsByClassName("square");

    for (i = 0; i < eraseColor.length; i++) {
          eraseColor[i].onmouseover = (e) => {
              e.target.style.backgroundColor = "#3E3054";
          };
    };
};

//function that changes color of Square randomly when hovering
  function colorRainbow() {

    let rainbowColor = document.getElementsByClassName("square");

    for (i = 0; i < rainbowColor.length; i++) {
          rainbowColor[i].onmouseover = (e) => {
              e.target.style.backgroundColor = randomColor();
          };
    };
};

createSquares();

sliderInput.addEventListener("input", createSquares);

buttonWhite.addEventListener("click", colorWhite);

buttonRainbow.addEventListener("click", colorRainbow);

buttonErase.addEventListener("click", colorErase);