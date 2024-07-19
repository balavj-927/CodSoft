function appendChar(char) {
    document.calculatorForm.display.value += char;
}
function clearDisplay() {
    document.calculatorForm.display.value = '';
}
function deleteChar() {
    var currentValue = document.calculatorForm.display.value;
    document.calculatorForm.display.value = currentValue.slice(0, -1);
}
function calculate() {
    var expression = document.calculatorForm.display.value;
    try {
        var result = eval(expression);
        document.calculatorForm.display.value = result;
    } catch (error) {
        alert('Invalid expression');
    }
}