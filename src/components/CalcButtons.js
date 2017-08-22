import React from 'react';

import '../styles/calculatorInput.css'

const CalcButtons = (props) => {

  const buttonRow = props.inputButtons.map((calcButtonRow) => {
    return calcButtonRow.map((calcButton, index) => {
      return (
        <button key={index} className="calc-btn" className="calc-btn" onClick={() => props.handleButtonInput(calcButton)}>{calcButton}</button>
      )
    });
  })

  return (
    <div className="input-container">
      {buttonRow}
    </div>
  );
}

export default CalcButtons;
