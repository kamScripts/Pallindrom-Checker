const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const resultSpan = document.querySelector('#result');

let = isPalindrome = false;

function getUserInput() {
    const rawValue = textInput.value;
    const value = cleanInput(rawValue.toLowerCase());
    if (value==="") {
        alert("Please input a value");        
    } else {
        palindromeCheck(value);
        printResults(rawValue)
    }
    
    
}
function cleanInput(str) {
    // \s matches any whitespaces \p{P}  any punctuation(Unicode property
    //  escape) global and unicode flags.
    const regex = /[\s\p{P}]/gu;
    return str.replace(regex, '');
}
function palindromeCheck(value) {
    // use spread to create array, and reverse.
    const arr = value.split("")
    const reverseArr = [...arr].reverse();
    const reversedString = reverseArr.join('');

    value===reversedString ? isPalindrome = true : isPalindrome = false;

    
}
function printResults(str) {

    const isOrNot = isPalindrome ? 'is' : 'is not';
    resultSpan.innerText = `${str} ${isOrNot} a palindrome`;
    resultSpan.style.backgroundColor = 'rgb(250, 225, 192)';
    resultSpan.style.padding = '0 20px 0 20px';
    
}

checkBtn.addEventListener("click", getUserInput);