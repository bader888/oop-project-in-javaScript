class calc {
    constructor(numberOne, numberTwo, operator) {
        this.numberOne = +numberOne;
        this.operator = operator;
        this.numberTwo = +numberTwo;
        this.screen = document.querySelector('.calculator-screen');
        this.result = null;
    }

    getResult() {
        if (this.numberOne == null ||
            this.numberTwo == null ||
            this.operator == null) {
            throw new console.error(alert('write two numbers and chose one operator'));

        } else {
            if (this.operator == '+') {
                this.result = this.numberOne + this.numberTwo;
            }
            if (this.operator == '-') {
                this.result = this.numberOne - this.numberTwo;
            }
            if (this.operator == '*') {
                this.result = this.numberOne * this.numberTwo;
            }
            if (this.operator == '/') {
                this.result = this.numberOne / this.numberTwo;
            }
        }

        this.screen.value = this.result;
    }
}

export default calc;