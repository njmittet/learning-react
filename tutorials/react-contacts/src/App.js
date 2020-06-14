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

  submitContact() {
    this.setState({
      input: '',
      contacts: [...this.state.contacts, this.state.input],
    });
  }

  render() {
    return (
      <div className="mt-3 container">
        <h1>Contacts</h1>
        <Input onChange={this.handleChange} inputValue={this.state.input} placeHolder="John Doe" />
        <Button action={this.submitContact} text="Add Contact" />
        <List values={this.state.contacts} />
      </div>
    );
  }
}

const Input = ({ onChange, inputValue, placeHolder }) => {
  console.log(inputValue);
  return (
    <div>
      <input className="form-control" onChange={onChange} value={inputValue} placeholder={placeHolder} />
    </div>
  );
};

const Button = ({ action, text }) => {
  return (
    <div>
      <button className="btn btn-primary mt-3" onClick={action}>
        {text}
      </button>
    </div>
  );
};

const List = ({ values }) => {
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
