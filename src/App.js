import React, { useState } from 'react';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState('');

    const calculate = () => {
        const value1 = parseFloat(num1);
        const value2 = parseFloat(num2);
        let output;

        switch (operation) {
            case '+':
                output = value1 + value2;
                break;
            case '-':
                output = value1 - value2;
                break;
            case '*':
                output = value1 * value2;
                break;
            case '/':
                output = value2 !== 0 ? value1 / value2 : 'Ошибка';
                break;
            case '^':
                output = Math.pow(value1, value2);
                break;
            case '√':
                output = Math.pow(value1, 1 / value2);
                break;
            default:
                output = 'Ошибка';
        }

        setResult(output);
    };

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Введите первое число"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Введите второе число"
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="^">^</option>
                <option value="√">√</option>
            </select>
            <button type="button" onClick={calculate}>Calculate</button>
            <h1 id="result">{result}</h1>
        </div>
    );
}

export default App;
