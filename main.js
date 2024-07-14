document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('numberInput');
    const button = document.getElementById('checkButton');
    const resultContainer = document.getElementById('result');

    button.addEventListener('click', function() {
        const number = parseInt(input.value);
        handleNumberInput(number, resultContainer);
    });
});
