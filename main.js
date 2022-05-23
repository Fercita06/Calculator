const numberDisplay = document.getElementById("display");
const numberButtons = document.querySelectorAll(".calculator__button");
//console.log("numberButtons");
const operatorButtons = document.querySelectorAll(".button calculator__button--operator");
const equalButton = document.getElementById("button-equal");
console.log(equalButton);

const dotButton = document.getElementById("button-dot");

let firstNumber="";
let secondNumber="";
let operator= "";

//display the value on the display
const showInputs = (event) => {
numberDisplay.innerHTML += event.target.innerText;   
}
numberButtons.forEach(button => {
button.addEventListener("click", showInputs)


//if the operator button is clicked , the second number appends to itself.
if(firstNumber && operator){
  secondNumber= secondNumber + EventTarget.innerHTML;
}

});

//Used the forEach to add and eventListener to the operators
operatorButtons.forEach((symbol) =>{
  symbol.addEventListener("click", (event)=>{
    console.log(event.target.innerHTML);
  })

});

const calculate = ()=>{
  
  switch(operator){   
    case"+":
    return firstNumber + secondNumber;
    break;

    case"-":
    return firstNumber - secondNumber;
    break;

    case"*":
    return firstNumber * secondNumber;
    break;

    case"/":
    return firstNumber / secondNumber;
    break;

    case"%":
    return firstNumber + secondNumber;
    break;
  }
    

}
//console.log(calculate);
equalButton.addEventListener("click", calculate)


 
   


