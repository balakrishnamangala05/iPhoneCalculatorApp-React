import React from 'react';
import './Button.css';

const Button = ({ value, onClick }) => {
    const isOperator = (val) => ['+', '-', '×', '÷', '=', '%'].includes(val);
    
    return(
        <button className={`button ${isOperator(value) ? 'operator' : ''}`}
        onClick={onClick}>
            {value}
        </button>
    )
}

    export default Button;  