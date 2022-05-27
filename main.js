//declare my variables and use getElementById and querySelector to bring my elements from HTML

const numberDisplay = document.getElementById("display");
const numberButtons = document.querySelectorAll(".calculator__button--number");
const operatorButtons = document.querySelectorAll(".calculator__button--operator");
console.log(operatorButtons);
const equalButton = document.getElementById("button-equal");
console.log(equalButton);
const clearButton = document.getElementById("button-clear");

//inicial variables
let operator = "";
let result = 0;


//functions that I will use in the switch 
const sum = () => {          
//takes the input value (display) and split firstNumber and secondNumber when the operator is clicked, ("+")
  const numbers = numberDisplay.value.split("+"); 

  //used reduce to accumulate the values and return a single value.
  result = numbers.reduce((previousValue, currentValue) =>

      Number(previousValue) + Number(currentValue) 
  );
  numberDisplay.value = result; //display the result function
};

const minus = () => {
  const numbers = numberDisplay.value.split("-"); 
  result = numbers.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) - Number(currentValue)
  );
  numberDisplay.value = result;
};

const multiplicate = () => {
  const numbers = numberDisplay.value.split("*");
  result = numbers.reduce(
    (previousValue, currentValue, i = 1) =>
      Number(previousValue) * Number(currentValue)
  );
  numberDisplay.value = result;
};

const division = () => {
  const numbers = numberDisplay.value.split("/");
  result = numbers.reduce(
    (previousValue, currentValue, i = 1) =>
      Number(previousValue) / Number(currentValue)
  );
  numberDisplay.value = result;
};

const percent = () => {

  result = result / 100;
  numberDisplay.value = result;
}
//display the value on the display
const showInputs = (event) => {
  console.warn(event.target.innerText);
  numberDisplay.value += event.target.innerText;
};
numberButtons.forEach((button) => {
  button.addEventListener("click", showInputs);
});

//Used the forEach to add an eventListener to the operators
operatorButtons.forEach((symbol) => {
  symbol.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    numberDisplay.value += event.target.innerText;
    operator = event.target.innerHTML;
    console.log(operator);
    numberDisplay.innerText += event.target.innerText; 

    //this only works when the % is clicked, it does the calculation without having to press the equal between operations
    if(event.target.innerText == '%'){
      calculate();
    }
  });
});

//clear button it converts the result to 0
const clearAllButtons = (event) => {
  numberDisplay.value = '';
  operator = '';
  result = 0;
};


//switch on symbol, use the functions that I've created before to perform the operation
const calculate = () => {
  switch (operator) {
    case "+":
      sum();
      break;

    case "-":
      minus();
      break;

    case "*":
      multiplicate();
      break;

    case "/":
      division();
      break;

    case "%":
      percent();
      break;
    default:
      console.log("sorry invalid operator");
      break;
  }
};



//events
clearButton.addEventListener("click", clearAllButtons);
equalButton.addEventListener("click", calculate);




