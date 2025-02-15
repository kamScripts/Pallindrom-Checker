const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const resultSpan = document.querySelector('#result');

function getUserInput() {
    const value = textInput.value;
    if (value==="") {
        alert("Please input a value")
    }
}
function cleanInput(input) {

}
function palindromeCheck(value) {

}
function printResults() {
    
}

checkBtn.addEventListener("click", getUserInput);