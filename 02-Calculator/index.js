import { Calculator } from "./Calculator.js";
window.Calculator = Calculator

var numpad = document.querySelectorAll(".numpad").item(0)
var calculation = document.querySelector("#calculation")
var solution = document.querySelector("#solution")

window.calc = new Calculator(numpad, calculation, solution)
