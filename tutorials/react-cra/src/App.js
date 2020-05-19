import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  submitMessage() {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input],
    });
  }

  render() {
    return (
      <div>
        <h1>Add Message:</h1>
        <input onChange={this.handleChange.bind(this)} value={this.state.input} />
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((message, id) => {
            return (
              <div key={id}>
                <p>{message}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
