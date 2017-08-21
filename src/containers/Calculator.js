import React, { Component } from 'react';
import math from 'mathjs';

import ResultDisplay from '../components/ResultDisplay';
import CalcButtons from '../components/CalcButtons';

import '../styles/calculator.css';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      inputButtons: [
        ['C', '<-', '/', '*'],
        [7, 8, 9, '-'],
        [4, 5, 6, '+'],
        [1, 2, 3, '='],
        [0, '.']
      ],
      operations: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(input) {
    switch(input) {
      case 'C':
        return this.setState({
          operations: [],
          result: 0
        });
        break;
      case '<-':
        let arr = this.state.operations;
        arr.splice(-1, 1);
        this.setState({
          operations: arr
        });
        break;
      case '=':
        let equation = this.state.operations.join('');
        try {
          let mathResult = math.eval(equation);
          this.setState({
            result: mathResult
          });
        }
        catch(err) {
          console.log(err);
          this.setState({
            result: 'ERR'
          });
        }
        break;
      default:
        this.setState({
          operations: [...this.state.operations, input]
        });
    }
  }

  render() {
    return (
      <div className="calc-container">
        <ResultDisplay result={this.state.result} operations={this.state.operations} />
        <CalcButtons inputButtons={this.state.inputButtons} handleButtonInput={this.handleClick}/>
      </div>
    );
  }

}
