import React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="mt-3 container">
        <h1>Contacts Redux</h1>
        <AddContact addContact={this.props.addContact} />
        <ListContacts contacts={this.props.contacts} />
      </div>
    );
  }
}

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  submitContact = (event) => {
    event.preventDefault();
    this.props.addContact(this.textInput.current.value);
    this.textInput.current.value = '';
  };

  render() {
    return (
      <div className="box">
        <form onSubmit={this.submitContact}>
          <input className="form-control" ref={this.textInput} />
          <button className="btn btn-primary mt-3" type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

const ListContacts = (props) => {
  return (
    <ul className="list-group mt-3">
      {props.contacts.map((contact, id) => {
        return (
          <li className="list-group-item py-2" key={id}>
            {contact}
          </li>
        );
      })}
    </ul>
  );
};

const actions = {
  addContact: (name) => {
    return {
      type: 'ADD_CONTACT',
      name,
    };
  },
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const { name } = action;
      return [...state, name];
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

const store = createStore(reducer, [], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class ContactApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
