import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      contacts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitContact = this.submitContact.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  submitContact(event) {
    event.preventDefault();
    this.setState({
      input: '',
      contacts: [...this.state.contacts, this.state.input],
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitContact}>
          <input type="text" className="form-control" onChange={this.handleChange} value={this.state.input} />
          <button className="btn btn-primary mt-3" type="submit">
            Add Contact
          </button>
        </form>
        <ul className="list-group mt-3">
          {this.state.contacts.map((contact, id) => {
            return (
              <li className="list-group-item py-2" key={id}>
                {contact}
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
