document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const submitButton = document.getElementById('submitButton');

    if (!username || !password) {
        moveButton(submitButton);
    } else {
        alert('Form submitted successfully!');
    }
});

function moveButton(button) {
    const offsetX = Math.random() * 300 - 150; // Random offset between -150 and 150
    const offsetY = Math.random() * 100 - 50;  // Random offset between -50 and 50
    button.style.position = 'relative';
    button.style.left = `${offsetX}px`;
    button.style.top = `${offsetY}px`;
}

let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

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
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operation = null;
    previousInput = '';
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('calc-display').value = value;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (isFinite(key)) {
        appendNumber(key);
    } else if (key === '+') {
        setOperation('+');
    } else if (key === '-') {
        setOperation('-');
    } else if (key === '*') {
        setOperation('*');
    } else if (key === '/') {
        setOperation('/');
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});
