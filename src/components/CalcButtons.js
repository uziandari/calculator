import React from 'react';

import '../styles/calculatorInput.css'

const CalcButtons = (props) => {

  const buttonRow = props.inputButtons.map((calcButtonRow) => {
    return calcButtonRow.map((calcButton, index) => {
      return (
        <div key={index} className="calc-btn">
          <button onClick={() => props.handleButtonInput(calcButton)}>{calcButton}</button>
        </div>
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
