import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numpad = numpad
        this.outputCalculation = outputCalculation
        this.outputSolution = outputSolution

        this.setupNumPad()
    }

    setupNumPad() { 
        
        var buttonList = this.numpad.children
        console.log("size + " + buttonList.length)   
        
        for (var i = 0; i < buttonList.length; i++) {
            var button = buttonList.item(i) 
            button.addEventListener("click", event => this.onButtonClick(event))
            
        }

    }

    onButtonClick(symbol) {
        var button = symbol.target.innerText
        console.log("Button " + button + " wurde gedrückt!")
        
    }

    print(string) {

    }

    printSolution(string) {

    }

    clear() {

    }

}
