let buffer = '0';
let bufferAssistant = '0';
let finalAnswer ='0';
let symbolSaver="";
const display = document.querySelector('.display');
let arrow = document.querySelector('.arrow-symbol').innerText;

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    } else{
        handleNumber(value);
    }
}

function handleNumber(number){
    if ( buffer === '0'){
        buffer = number;
    } else{
        buffer += number;
    }
    display.innerText = buffer;
}

function handleSymbol(symbol){
    if(symbol === 'C'){
        display.innerText = "";
        buffer = '0';
        bufferAssistant = '0';
    }
    if(symbol === arrow){
        console.log(buffer);
        buffer = buffer.substring(0,buffer.length-1);
        display.innerText=buffer;
    }
    if(symbol === '+'){
        display.innerText = "";
        symbolSaver = '+';
        bufferAssistant = buffer;
        buffer="0";
    }
    if(symbol === '/'){
        display.innerText = "";
        symbolSaver = '/';
        bufferAssistant = buffer;
        buffer="0";
    }
    if(symbol === '-'){
        display.innerText = "";
        symbolSaver = '-';
        bufferAssistant = buffer;
        buffer="0";
    }
    if(symbol === '*'){
        display.innerText = "";
        symbolSaver = '*';
        bufferAssistant = buffer;
        buffer="0";
    }
    if(symbol === '='){
        if(symbolSaver === "+"){
            finalAnswer = parseInt(bufferAssistant) + parseInt(buffer); 
            display.innerText = finalAnswer;
            buffer = finalAnswer;
            bufferAssistant = "0";
        }
        if(symbolSaver === "-"){
            finalAnswer = parseInt(bufferAssistant) - parseInt(buffer); 
            display.innerText = finalAnswer;
            buffer = finalAnswer;
            bufferAssistant = "0";
        }
        if(symbolSaver === "*"){
            finalAnswer = parseInt(bufferAssistant) * parseInt(buffer); 
            display.innerText = finalAnswer;
            buffer = finalAnswer;
            bufferAssistant = "0";
        }
        if(symbolSaver === "/"){
            finalAnswer = parseInt(bufferAssistant) / parseInt(buffer); 
            display.innerText = finalAnswer;
            buffer = finalAnswer;
            bufferAssistant = "0";
        } 
    }
}


function init(){
    document.querySelector('.calculator-buttons').addEventListener("click" , function(event){
        buttonClick(event.target.innerText);
    });
}

init();
