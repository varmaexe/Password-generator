const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]")
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("[#uppercase]");
const lowercaseCheck = document.querySelector("[#lowercase]");
const numbersCheck = document.querySelector("[#numbers]");
const symbolsCheck = document.querySelector("[#symbols]");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]")
const symbols = '~!@#$%^&*()_+={[}]?>?:<,.>/|\/"';

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();
// set strength circle color to grey

//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow
}

function getRandInteger(min,max){
    return Math.floor(Math.random() *(max-min) + min)
}

function generateRandom(){
    return getRandInteger(0,9);   
}

function generateLowerCase() {
    String.fromCharCode(getRandInteger(97,123))
}

function generateUpperCase() {
    String.fromCharCode(getRandInteger(65,90))
}

function generateSymbol() {
    const randNum = getRandInteger(0, symbols.length)
    return symbols.charAt(randNum)
}