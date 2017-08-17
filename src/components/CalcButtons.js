import React from 'react';

import '../styles/result.css'

const CalcButtons = (props) => {

  const buttonRow = props.inputButtons.map((calcButtonRow) => {
    return calcButtonRow.map((calcButton, index) => {
      return (
        <div key={index} className="button-row-container">
          <button className="calc-button" >{calcButton}</button>
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
