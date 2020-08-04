function sumit(a, b) {
    return a + b;
}

function subtractit(a, b) {
    return a - b;
}

function multiplyit(a, b) {
    return a * b;
}

function divideit(a, b) {
    if (b === 0)
        return 0;
    return a / b;
}

function operate(input) {
    if (!validateInput(input)) {
        return input;
    }
    let $array = input.split("");
    let result = getNumberValue($array);
    let operator;
    let secondNumber;
    while ($array.length > 0) {
        operator = getOperator($array);
        secondNumber = getNumberValue($array);
        result = performAppropriateOperation(result, operator, secondNumber)
    }
    return result;
}

function getNumberValue(array) {
    let $result = "";
    while (isNumeric(array[0])) {
        $result += array.shift();
    }
    return parseInt($result);
}

function getOperator(array) {
   let result = array.shift();
    while (isNaN(array[0])) {
        array.shift()
    }
    return result;
}

function validateInput(input) {
    //return false if the input is null or empty
    if (input == null || input.trim().length === 0) {
        return false;
    }
    let $inputArray = input.split();
    //return false if first and last characters are not digits
    return !(Number.isNaN($inputArray[0]) || Number.isNaN($inputArray[$inputArray.length - 1]));
}

function isNumeric(value) {
    return !isNaN(value);
}

function performAppropriateOperation (firstValue, operator, secondValue) {
    if (operator === '+') {
        sum = sumit(firstValue, secondValue);
        return sum;
    }
    else if (operator === '-') {
        return subtractit(firstValue, secondValue);
    }
    else if (operator === '*') {
        return multiplyit(firstValue, secondValue);
    }
    else if (operator === '/') {
        return divideit(firstValue, secondValue)
    }
}
