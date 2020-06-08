import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
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
        <input className="form-control" onChange={this.handleChange} value={this.state.input} placeholder="John Doe" />
        <button className="btn btn-primary mt-3" onClick={this.submitMessage}>
          Add Contact
        </button>
        <ul className="list-group mt-3">
          {this.state.messages.map((message, id) => {
            return (
              <li className="list-group-item py-2" key={id}>
                {message}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="mt-3 container">
      <h1>Contacts</h1>
      <MyComponent />
    </div>
  );
}

export default App;
