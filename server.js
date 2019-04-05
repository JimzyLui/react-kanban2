import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: 0
    };
  }

  addCounter = () => {
    this.setState({ counters: this.state.counters + 1 });
  };

  renderCounters = () => {
    const counters = [];
    for (var i = 0; i < this.state.counters; i++) {
      counters.push(<Counter />);
    }
    return counters;
  };

  render() {
    return (
      <div>
        <button onClick={this.addCounter}>Add Counter</button>
        {this.renderCounters()}
      </div>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  count = () => {
    return 5 + 5;
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;