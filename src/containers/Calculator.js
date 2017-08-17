import React, { Component } from 'react';

import ResultDisplay from '../components/ResultDisplay';
import CalcButtons from '../components/CalcButtons';

import '../styles/calculator.css';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      inputButtons: [
        ['C', '/', '*'],
        [7, 8, 9, '-'],
        [4, 5, 6, '+'],
        [1, 2, 3, '='],
        [0, '.']
      ]
    }
  }

  render() {
    return (
      <div className="calc-container">
        <ResultDisplay result={this.state.result} />
        <CalcButtons inputButtons={this.state.inputButtons}/>
      </div>
    );
  }

}
