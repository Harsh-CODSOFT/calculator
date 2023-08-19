let result = document.getElementById("result");
let clear = document.getElementById("clear");

function appendNumber(num) {
    result.value += num;
}

function appendOperator(operator) {
    result.value += operator;
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 0;
    }
}

function clearScreen() {
    result.value = 0;
} 