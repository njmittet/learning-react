import React, { Component } from 'react';

class ContactApp extends Component {
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
      <div className="mt-3 container">
        <h1>Contacts</h1>
        <ItemInput onChange={this.handleChange} onSubmit={this.submitContact} inputValue={this.state.input} />
        <ItemList values={this.state.contacts} />
      </div>
    );
  }
}

const ItemInput = ({ onChange, onSubmit, inputValue }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="form-control" onChange={onChange} value={inputValue} />
        <button className="btn btn-primary mt-3" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

const ItemList = ({ values }) => {
  return (
    <ul className="list-group mt-3">
      {values.map((value, id) => {
        return (
          <li className="list-group-item py-2" key={id}>
            {value}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactApp;
