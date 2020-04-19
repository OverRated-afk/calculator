function add(value1, value2){
    let sum = value1 + value2;
    return sum;
}

function subtract(value1, value2){
    let sum = value1 - value2;
    return sum;
}

function multiply(value1, value2){
    let sum = value1 * value2;
    return sum;
}

function divide(value1, value2){
    let sum = value1 / value2;
    return sum;
}

function operate(operator, value1, value2){
    switch(operator) {
        case "+" :
            return add(value1, value2);
        case "/" :
            return divide(value1, value2);
        case "-" :
            return subtract(value1, value2);
        case "*" :
            return multiply(value1, value2);
    }
}

function testDisplay(){    
    
    }









//below this is calculation functionality.


let iv1 = [];
let operator ="";
let iv2 = [];
const content = document.getElementById("display");
const buttons = document.querySelectorAll("button"); // this code plays te game on click of the button and tracks the win or losses/
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(button.value == "c") {//checks if clear is press and reset variables
                iv1 = [];
                iv2 = [];
                operator = "";
                content.innerHTML = `${iv1.join("")}`;
            } else if (operator == ""){
                if(button.value=="+"||button.value=="/"||button.value=="*"||button.value=="-"){//accepts values for first entry, until operator button is pushed.
                    operator=button.value;
                } else {                
                    iv1.push(button.value);
                    content.innerHTML = `${iv1.join("")}`;
                }
            } else {    
                if(button.value=="="){//checks for completion of entry, returns operation, clears values.
                    let firstValue = parseInt(iv1.join(""));
                    let secondValue = parseInt(iv2.join(""));
                    content.innerHTML=`${operate(operator, firstValue, secondValue)}`;
                    iv1 = [];
                    iv2 = [];
                    operator = "";
                } else {//stores all numbers entered after operate as the second value
                    iv2.push(button.value);
                    content.innerHTML = `${iv2.join("")}`
                }
            }    
        });
    });
