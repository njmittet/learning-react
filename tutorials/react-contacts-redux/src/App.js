import React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

const initialState = [
  {
    name: 'Jioke Silas',
    id: uuid(),
  },
  {
    name: 'Uloma Asomugha',
    id: uuid(),
  },
  {
    name: 'Chris Coyier',
    id: uuid(),
  },
];

class App extends React.Component {
  render() {
    return (
      <section className="section">
        <h1 className="title">Contacts</h1>
        <AddContact addContact={this.props.addContact} />
        <Contacts contacts={this.props.contacts} />
      </section>
    );
  }
}

const Contacts = (props) => {
  return (
    <ul>
      {props.contacts.map((contact, id) => (
        <div key={id} className="box">
          <p>{contact.name}</p>
        </div>
      ))}
    </ul>
  );
};

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.textInput.current.value);
  };

  render() {
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" ref={this.textInput} placeholder="John Doe" />
            </div>
          </div>
          <button type="submit" className="button">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

const actions = {
  addContact: (name) => {
    return {
      type: 'ADD_CONTACT',
      id: uuid(),
      name,
    };
  },
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const { name } = action;
      return [{ name }, ...state];
    default:
      return state;
  }
};

const AppContainer = connect(
  function mapStateToProps(state) {
    return {
      contacts: state,
    };
  },
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
  },
)(App);

const store = createStore(reducer, initialState);

export default class ContactApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
