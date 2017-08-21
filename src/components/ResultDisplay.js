import React from 'react';

import '../styles/result.css'

const ResultDisplay = (props) => {
  return (
    <div className="result-container">
      <h1 className="result-num">{props.result}</h1>
      <p className="input-all">{props.operations}</p>
    </div>
  );
}

export default ResultDisplay;
