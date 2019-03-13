let colorDisplay = document.querySelector('#colorDisplay');
let squares = document.querySelectorAll('.square');
let resetBut = document.querySelector('#reset');
let resultText = document.querySelector('#resultText');
let mode = document.querySelectorAll('.mode');
let h1 = document.querySelector("h1");
let modeNum = 6;
let colorArr = getColorArr(modeNum);
let pickColor = getPickColor();


colorDisplay.textContent = pickColor;
setColorSquare();
resetButton()
restart();
setMode();

function setMode() {

    for (let i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function() {             
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ?modeNum = 3 :modeNum = 6 
            restart();            
        })
    }   
    
}

function resetButton() {
    resetBut.addEventListener("click", function() {
     restart();
    });
} 

function restart() {
        colorArr = getColorArr(modeNum);
        pickColor = getPickColor();
        colorDisplay.textContent = pickColor;
        resultText.textContent = "";
        resetBut.textContent = "new colors"
        h1.style.background = 'steelblue';
        for (let i=0; i < squares.length; i++) {
            if (colorArr[i]) {
                squares[i].style.display = "block";
                setColorSquare();

            } else {
                squares[i].style.display = "none";
            }
        }        
               
}

function generationRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function getColorArr(num) {
    const colorArr = []
    for (let i = 0; i < num; i++) {
        colorArr.push(generationRandomColor());
    }
    return colorArr
}

function getPickColor() {
    let randomColorNum;    
    randomColorNum = Math.floor(Math.random() * colorArr.length);            
    return  colorArr[randomColorNum]
}

function setColorSquare() {
    for (let i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colorArr[i];  
        squares[i].addEventListener("click", function() {          
            if (squares[i].style.backgroundColor === pickColor) {
                resultText.textContent = "You win!!!";
                resetBut.textContent = "Play again?"
                h1.style.background = pickColor;
                for (let i=0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = pickColor; 
                }                                                             
            } else {
                resultText.textContent = "Try again";
                squares[i].style.backgroundColor = "#232323";                
            }                
        });  
    }  
}



