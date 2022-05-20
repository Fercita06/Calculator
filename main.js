const numberDisplay = document.getElementById("display");
const numberButtons = document.querySelectorAll(".calculator__button");
console.log("numberButtons");

const showInputs = (event) => {
numberDisplay.innerHTML += event.target.innerText;   
}
numberButtons.forEach(button => {
button.addEventListener("click", showInputs)
});

const OperatorButtons = document.querySelectorAll(".button calculator__button--operator");





 