import React, { Component } from 'react';

const Euro = ({ amount }) => <div>Euro: {amount * 0.76}</div>;

const Pound = ({ amount }) => <div>Pound: {amount * 0.86}</div>;

class Amount extends Component {
  state = { amount: 0 };

  onIncrement = () => {
    this.setState({ amount: this.state.amount + 1 });
  };

  onDecrement = () => {
    this.setState({ amount: this.state.amount - 1 });
  };

  render() {
    return (
      <div>
        <div>US Dollar: {this.state.amount}</div>
        <div className="btn-group">
          <button className="btn btn-primary" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="btn btn-primary" type="button" onClick={this.onDecrement}>
            Decrement
          </button>
        </div>
        <Euro amount={this.state.amount} />
        <Pound amount={this.state.amount} />
      </div>
    );
  }
}

const App = () => (
  <div className="mt-3 container">
    <h1>Currency Converter</h1>
    <Amount />
  </div>
);

export default App;
