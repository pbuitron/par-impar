function handleNumberInput(number, resultContainer) {
    resultContainer.innerHTML = '';

    const resultElement = document.createElement('h1');
    resultElement.classList.add("titleResult");

    if (isNaN(number)) {
        resultElement.textContent = 'Por favor ingresa un número válido';
    } else if (number < 1 || number > 100) {
        resultElement.textContent = 'Por favor ingresa un número entre 1 y 100';
    } else {
        if (number === 1) {
            resultElement.textContent = `El número 1 es impar`;
        } else if (number === 2){
            resultElement.textContent = `El número 2 es par`;
        }else if (number === 3){
            resultElement.textContent = `El número 3 es par`;
        }else if (number === 4){
            resultElement.textContent = `El número 4 es par`;
        }else if (number === 5){
            resultElement.textContent = `El número 5 es par`;
        }else if (number === 6){
            resultElement.textContent = `El número 6 es par`;
        }else if (number === 7){
            resultElement.textContent = `El número 7 es par`;
        }else if (number === 8){
            resultElement.textContent = `El número 8 es par`;
        }else if (number === 9){
            resultElement.textContent = `El número 9 es par`;
        }else if (number === 10){
            resultElement.textContent = `El número 10 es par`;
        }else if (number === 11){
            resultElement.textContent = `El número 11 es par`;
        }else if (number === 12){
            resultElement.textContent = `El número 12 es par`;
        }else if (number === 13) {
            resultElement.textContent = `El número 13 es impar`;
        } else if (number === 14) {
            resultElement.textContent = `El número 14 es par`;
        } else if (number === 15) {
            resultElement.textContent = `El número 15 es impar`;
        } else if (number === 16) {
            resultElement.textContent = `El número 16 es par`;
        } else if (number === 17) {
            resultElement.textContent = `El número 17 es impar`;
        } else if (number === 18) {
            resultElement.textContent = `El número 18 es par`;
        } else if (number === 19) {
            resultElement.textContent = `El número 19 es impar`;
        } else if (number === 20) {
            resultElement.textContent = `El número 20 es par`;
        } else if (number === 21) {
            resultElement.textContent = `El número 21 es impar`;
        } else if (number === 22) {
            resultElement.textContent = `El número 22 es par`;
        } else if (number === 23) {
            resultElement.textContent = `El número 23 es impar`;
        } else if (number === 24) {
            resultElement.textContent = `El número 24 es par`;
        } else if (number === 25) {
            resultElement.textContent = `El número 25 es impar`;
        } else if (number === 26) {
            resultElement.textContent = `El número 26 es par`;
        } else if (number === 27) {
            resultElement.textContent = `El número 27 es impar`;
        } else if (number === 28) {
            resultElement.textContent = `El número 28 es par`;
        } else if (number === 29) {
            resultElement.textContent = `El número 29 es impar`;
        } else if (number === 30) {
            resultElement.textContent = `El número 30 es par`;
        } else if (number === 31) {
            resultElement.textContent = `El número 31 es impar`;
        } else if (number === 32) {
            resultElement.textContent = `El número 32 es par`;
        } else if (number === 33) {
            resultElement.textContent = `El número 33 es impar`;
        } else if (number === 34) {
            resultElement.textContent = `El número 34 es par`;
        } else if (number === 35) {
            resultElement.textContent = `El número 35 es impar`;
        } else if (number === 36) {
            resultElement.textContent = `El número 36 es par`;
        } else if (number === 37) {
            resultElement.textContent = `El número 37 es impar`;
        } else if (number === 38) {
            resultElement.textContent = `El número 38 es par`;
        } else if (number === 39) {
            resultElement.textContent = `El número 39 es impar`;
        } else if (number === 40) {
            resultElement.textContent = `El número 40 es par`;
        } else if (number === 41) {
            resultElement.textContent = `El número 41 es impar`;
        } else if (number === 42) {
            resultElement.textContent = `El número 42 es par`;
        } else if (number === 43) {
            resultElement.textContent = `El número 43 es impar`;
        } else if (number === 44) {
            resultElement.textContent = `El número 44 es par`;
        } else if (number === 45) {
            resultElement.textContent = `El número 45 es impar`;
        } else if (number === 46) {
            resultElement.textContent = `El número 46 es par`;
        } else if (number === 47) {
            resultElement.textContent = `El número 47 es impar`;
        } else if (number === 48) {
            resultElement.textContent = `El número 48 es par`;
        } else if (number === 49) {
            resultElement.textContent = `El número 49 es impar`;
        } else if (number === 50) {
            resultElement.textContent = `El número 50 es par`;
        } else if (number === 51) {
            resultElement.textContent = `El número 51 es impar`;
        } else if (number === 52) {
            resultElement.textContent = `El número 52 es par`;
        } else if (number === 53) {
            resultElement.textContent = `El número 53 es impar`;
        } else if (number === 54) {
            resultElement.textContent = `El número 54 es par`;
        } else if (number === 55) {
            resultElement.textContent = `El número 55 es impar`;
        } else if (number === 56) {
            resultElement.textContent = `El número 56 es par`;
        } else if (number === 57) {
            resultElement.textContent = `El número 57 es impar`;
        } else if (number === 58) {
            resultElement.textContent = `El número 58 es par`;
        } else if (number === 59) {
            resultElement.textContent = `El número 59 es impar`;
        } else if (number === 60) {
            resultElement.textContent = `El número 60 es par`;
        } else if (number === 61) {
            resultElement.textContent = `El número 61 es impar`;
        } else if (number === 62) {
            resultElement.textContent = `El número 62 es par`;
        } else if (number === 63) {
            resultElement.textContent = `El número 63 es impar`;
        } else if (number === 64) {
            resultElement.textContent = `El número 64 es par`;
        } else if (number === 65) {
            resultElement.textContent = `El número 65 es impar`;
        } else if (number === 66) {
            resultElement.textContent = `El número 66 es par`;
        } else if (number === 67) {
            resultElement.textContent = `El número 67 es impar`;
        } else if (number === 68) {
            resultElement.textContent = `El número 68 es par`;
        } else if (number === 69) {
            resultElement.textContent = `El número 69 es impar`;
        } else if (number === 70) {
            resultElement.textContent = `El número 70 es par`;
        } else if (number === 71) {
            resultElement.textContent = `El número 71 es impar`;
        } else if (number === 72) {
            resultElement.textContent = `El número 72 es par`;
    }
}

    resultContainer.appendChild(resultElement);
}
