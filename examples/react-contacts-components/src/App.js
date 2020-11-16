import React, { Component } from 'react'
import ItemInput from 'components/ItemInput'
import ItemList from 'components/ItemList'

class ContactApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      contacts: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitContact = this.submitContact.bind(this)
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  submitContact(event) {
    event.preventDefault()
    this.setState((state) => ({
      input: '',
      contacts: [...state.contacts, state.input],
    }))
  }

  render() {
    return (
      <div className="mt-3 container">
        <h1>Contacts Components</h1>
        <ItemInput
          onChange={this.handleChange}
          onSubmit={this.submitContact}
          inputValue={this.state.input}
          buttonValue="Add Contacts"
        />
        <ItemList values={this.state.contacts} />
      </div>
    )
  }
}

export default ContactApp
