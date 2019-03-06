import React from 'react';
import './Display.css';


const CalculatorDisplay = (props) => {
    return (
        <div className="displayContainer">
        <p className="{props.buttonStyle}">{props.text}</p>
        </div>
    )
    
};


export default CalculatorDisplay

