import React, { Component } from 'react';

import Calculator from './Calculator';

import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}

export default App;
