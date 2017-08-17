import React from 'react';

import '../styles/result.css'

const ResultDisplay = (props) => {
  return (
    <div className="result-container">
      <h2>{props.result}</h2>
    </div>
  );
}

export default ResultDisplay;
