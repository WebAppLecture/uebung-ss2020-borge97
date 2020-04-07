import { Calculator } from "./Calculator.js";
window.Calculator = Calculator

const numpad = document.querySelectorAll(".numpad") 
const calculation = document.querySelector("#calculation")
const solution = document.querySelector("#solution")

window.calc = new Calculator(numpad, calculation, solution)