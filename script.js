//Global Variables
let sliderInput = document.getElementById("sliderInput");
let sliderOutput = document.getElementById("sliderOutput");
let drawArea = document.getElementById("drawArea");
let buttonWhite = document.getElementById("white");


sliderOutput.textContent = `${sliderInput.value}x${sliderInput.value}`;


//function that changes the displayed value of the slider.
sliderInput.oninput = function() {
    sliderOutput.textContent = `${this.value}x${this.value}`;
    sliderValue = this.value;
}
let sliderValue = sliderInput.value;


function createSquares () {



    let drawArea = document.getElementById("drawArea");

    const parent = document.getElementById("drawArea")
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

createSquares();

sliderInput.addEventListener("input", () => {
    createSquares();
} );


function colorWhite() {

    let whiteColor = document.getElementsByClassName("square");

    for (i = 0; i < whiteColor.length; i++) {
          whiteColor[i].onmouseover = (e) => {
              e.target.style.backgroundColor = "white";
          };
      };
  };

buttonWhite.addEventListener("click", colorWhite)


// add mouseOver CSS Class.