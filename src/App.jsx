import { useState } from 'react';
import './App.css';         
function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(0);
  const [color, setColor] = useState('blue');
  const calculate = (operation) => {
    if (a.trim() === '' || b.trim() === '') {
      setResult('Enter both numbers');
      setColor('red');
      return;
    }
    const x = Number(a);
    const y = Number(b);
    let answer;
    switch (operation) {  
      case '+': answer = x + y; break;
      case '-': answer = x - y; break;
      case '*': answer = x * y; break;
      case '/':
        if (y === 0) {
          setResult('Cannot divide by zero');
          setColor('red');
          return;
        }
        answer = x / y;
        break;
      default: return;
    }
    setResult(answer);
    setColor(operation === '+' ? 'green' :
              operation === '-' ? 'red' :
              operation === '*' ? 'purple' : 'orange');
  };
  return (
    <div className="container">
      <div className="calculator">
        <h1>Zen's Calculator</h1>

        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Enter Number A"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Enter Number B"
        />
        <h2 className={color}>Result: {result}</h2>
        <div className="buttons">
          <button className="add" onClick={() => calculate('+')}>
            Addition (+)
          </button>
          <button className="subtract" onClick={() => calculate('-')}>
            Subtraction (-)
          </button>
          <button className="multiply" onClick={() => calculate('*')}>
            Multiplication (×)
          </button>
          <button className="divide" onClick={() => calculate('/')}>
            Division (÷)
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;