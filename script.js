let currentNumber = '';
let previousNumber = '';
let operation = '';

const display = document.getElementById('display');
const historyList = document.getElementById('history-list');

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        case '^': // Exponentiation
            result = Math.pow(prev, current);
            break;
        case 'log': // Logarithm (base 10)
            result = current > 0 ? Math.log10(current) : 'Error';
            break;
        default:
            return;
    }
    addToHistory(`${previousNumber} ${operation} ${currentNumber} = ${result}`);
    currentNumber = result;
    operation = '';
    previousNumber = '';
    updateDisplay();
}

function addToHistory(entry) {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    updateDisplay();
    historyList.innerHTML = ''; // Clear history
}

function updateDisplay() {
    display.value = currentNumber || '0';
}
function appendNumber(value) {
    currentNumber += value;
    updateDisplay();
}
function calculate() {
    try {
        let result = eval(currentNumber); // ใช้ eval() เพื่อคำนวณนิพจน์ที่มีวงเล็บ
        addToHistory(`${currentNumber} = ${result}`);
        currentNumber = result;
        updateDisplay();
    } catch (error) {
        currentNumber = 'Error';
        updateDisplay();
    }
}
function calculateSquareRoot() {
    if (currentNumber === '') return;
    let num = parseFloat(currentNumber);
    if (num < 0) {
        currentNumber = 'Error'; // ไม่สามารถหารากที่สองของค่าลบได้
    } else {
        let result = Math.sqrt(num);
        addToHistory(`√${currentNumber} = ${result}`);
        currentNumber = result;
    }
    updateDisplay();
}
function appendPi() {
    currentNumber += Math.PI.toFixed(6); // ใช้ค่าพาย 3.141593
    updateDisplay();
}
function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        case '%':
            result = prev * (current / 100); // คำนวณเปอร์เซ็นต์
            break;
        default:
            return;
    }
    addToHistory(`${previousNumber} ${operation} ${currentNumber} = ${result}`);
    currentNumber = result;
    operation = '';
    previousNumber = '';
    updateDisplay();
}
function calculateTrig(func) {
    if (currentNumber === '') return;
    let value = parseFloat(currentNumber);
    if (isNaN(value)) return;
    
    let result;
    switch (func) {
        case 'sin':
            result = Math.sin(value * Math.PI / 180); // คำนวณเป็นองศา
            break;
        case 'cos':
            result = Math.cos(value * Math.PI / 180); // คำนวณเป็นองศา
            break;
        case 'tan':
            result = Math.tan(value * Math.PI / 180); // คำนวณเป็นองศา
            break;
        default:
            return;
    }
    
    addToHistory(`${func}(${currentNumber}) = ${result}`);
    currentNumber = result;
    updateDisplay();
}
function calculateTrigInverse(func) {
    if (currentNumber === '') return;
    let value = parseFloat(currentNumber);
    if (isNaN(value) || value < -1 || value > 1) return; // ค่า arcsin และ arccos ต้องอยู่ระหว่าง -1 ถึง 1
    
    let result;
    switch (func) {
        case 'asin':
            result = Math.asin(value) * (180 / Math.PI); // แปลงเป็นองศา
            break;
        case 'acos':
            result = Math.acos(value) * (180 / Math.PI); // แปลงเป็นองศา
            break;
        case 'atan':
            result = Math.atan(value) * (180 / Math.PI); // แปลงเป็นองศา
            break;
        default:
            return;
    }
    
    addToHistory(`${func}(${currentNumber}) = ${result}`);
    currentNumber = result;
    updateDisplay();
}
