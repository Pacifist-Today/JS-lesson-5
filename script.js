let indexSum = 0
let indexSub = 0
let indexPow = 0
let indexMul = 0
let indexDiv = 0
let count = 0

let LastOperation = null
let methodMap = {
    'sum': 0,
    'subtract': 0,
    'pow': 0,
    'multiply': 0,
    'divide': 0,
}

function Calculator() {
    
    function updateData (methodName, value) {
        console.log(LastOperation = {method: methodName, value})
        methodMap[methodName] =+ 1;
    }
    
    this.sum = function (a,b)  { 
        let result = a + b;
        updateData('sum', result);
        indexSum++;
        return result;
    }
    this.subtract = function (a,b) {
        indexSub++;
        let result = a - b
        updateData('subtract', result)
        return result;
    }
    this.pow = function (a,b) {
        let result = a ** b;
        updateData('pow', result)
        indexPow++;
        return result;
    }
    this.multiply = function (a,b) {
        let result = a * b
        updateData('multiply', result)
        indexMul++;
        return result
    }
    this.divide = function(a,b) {
        let result = a / b
        updateData('divide', result)
        indexDiv++;
        return result;
    }
    this.getMethodCallCount = function (methodName, methodMap) {
        console.log("Фунция " + "sum" + " была вызвана " + indexSum + " раза");
        console.log("Фунция " + "subract" + " была вызвана " + indexSub + " раза");
        console.log("Фунция " + "pow" + " была вызвана " + indexPow + " раз");
        console.log("Фунция " + "multiply" + " была вызвана " + indexMul + " раз");
        console.log("Фунция " + "divide" + " была вызвана " + indexDiv + " раз");
    }
    this.getLastOperation = function () {
        console.log(LastOperation)
    }
}
    const calculator = new Calculator();
    
    console.log(calculator.sum(10, 5)); // 15 
    console.log(calculator.sum(20, 5)); // 25 
    console.log(calculator.sum(30, 5)); // 35
    console.log(calculator.sum(40, 5)); // 45
    console.log(calculator.subtract(10, 5)); // 5
    console.log(calculator.subtract(20, 5)); // 15
    console.log(calculator.pow(2, 3)); // 8
    console.log(calculator.multiply(2, 3)); // 6
    console.log(calculator.divide(6, 2)); // 3
    
    calculator.getMethodCallCount();
    
    calculator.getLastOperation(); // { method 'divide', result: 3 }