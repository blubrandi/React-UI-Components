import React from 'react'

import NumberButton from './NumberButton'
import ActionButton from './ActionButton'


const ButtonContainer = (props) => {
    return (
        <div className="buttonContainer">     
            <ActionButton text="clear" buttonStyle="actionButton"/>
            <NumberButton text="÷" buttonStyle="symbolButton"/>
            
            <NumberButton text="7" buttonStyle="numberButton"/>
            <NumberButton text="8" buttonStyle="numberButton"/>
            <NumberButton text="9" buttonStyle="numberButton"/>
            <NumberButton text="X" buttonStyle="symbolButton"/>
            
            <NumberButton text="4" buttonStyle="numberButton"/>
            <NumberButton text="5" buttonStyle="numberButton"/>
            <NumberButton text="6" buttonStyle="numberButton"/>
            <NumberButton text="-" buttonStyle="symbolButton"/>
                
            <NumberButton text="1" buttonStyle="numberButton"/>
            <NumberButton text="2" buttonStyle="numberButton"/>
            <NumberButton text="3" buttonStyle="numberButton"/>
            <NumberButton text="+" buttonStyle="symbolButton"/>
            
            <ActionButton text="0" buttonStyle="actionButton"/>
            <NumberButton text="=" buttonStyle="symbolButton"/> 
        </div>  
    )
}


export default ButtonContainer