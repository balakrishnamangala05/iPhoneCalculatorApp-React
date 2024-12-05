import React, {useState} from 'react';
import Button from './Button'; 
import './Calculator.css';

const Calculator = () =>{
    const[display, setDisplay] = useState('0');
    const [calculation, setCalculation] = useState('');

    const handleButtonClick = (value)=>{
        if (value === 'C') {
            setDisplay('0');
            setCalculation('');
          } else if (value === '=') {
            try {
                // eslint-disable-next-line no-eval
                const result = eval(calculation.replace('×', '*').replace('÷', '/'));
                setDisplay(result.toString());
                setCalculation(result.toString());
            } catch {
                setDisplay('Error');
                setCalculation('');
            }
          } else {
            const newCalc = calculation + value;
            setCalculation(newCalc);
            setDisplay(newCalc);
          }
    }

    return(
        <div className='calculator'>
            <div className='display'>{display}</div>
            <div className='button-grid'>
                {['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='].map((btn,i)=>(
                    <Button  > 
                        key={i}
                        value={btn.toString()}
                        className={btn === '0' ? 'zero' : ''}
                        onClick={() => handleButtonClick(btn.toString())}
                    </Button>
                ))}

            </div>

        </div>
    );
}

export default Calculator;