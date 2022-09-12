import calc from "./calc.js";

class getAllValue {

    constructor() {
        // get all value container that i need
        this.screen = document.querySelector('.calculator-screen');
        // add the click btn to the keys parent ==> that make all child lesten to the father event ;) 
        this.calculator_keys = document.querySelector('.calculator-keys').addEventListener('click', this.getValue.bind(this))
        this.numberOne = null;
        this.operator = null;
        this.numberTwo = null;
    }

    getValue(keys) {
        if (keys.target.classList.contains('all-clear')) {
            this.resetValue()
            this.emptyScreen()

        } else if (keys.target.classList.contains('equal-sign')) {
            this.getSecondNumber()
            // make object from thr calc class and pass two numbers with operation that user chose
            let allValue = new calc(this.numberOne, this.numberTwo, this.operator)
            allValue.getResult() // it's clear

        } else if (keys.target.classList.contains('operator')) {
            this.getFirstNumber() // it's clear
            this.getOperator(keys.target.value) // it's clear
            this.emptyScreen() // it's clear

        } else if (keys.target.classList.contains('calculator-keys')) {
            // if the user click on the father keys ===> nothing happend :3 
            return

        } else {
            if (keys.target.classList.contains('number')) {
                // it's clear
                this.screen.value += keys.target.textContent
            }
        }
    }

    // this methode make resturn the value to the defualt
    resetValue() {
        this.numberOne = null;
        this.operator = null;
        this.numberTwo = null;
    }

    // make the screen emplty :) 
    emptyScreen() {
        this.screen.value = ''
    }

    // these three methods get the numbers , they very simple
    getFirstNumber() {
        this.numberOne = this.screen.value;
    }

    getSecondNumber() {
        this.numberTwo = this.screen.value;
    }

    getOperator(op) {
        this.operator = op;
    }
}
let x = new getAllValue();

