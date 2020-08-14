# React + Redux Notes

This file contains a selection of React and Redux examples created while learning from different sources.

## Sources

[freeCodeCamp.org/React](https://www.freecodecamp.org/learn/front-end-libraries/react/)  
[freeCodeCamp.org/Redux](freecodecamp.org/learn/front-end-libraries/redux/)  
[freeCodeCamp.org/React+Redux](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/)  

## React

### Imports

Real-lift imports when using React, Redux redux-thunk and react-redux.

```JSX
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'
```

### Rendering

Use ReactDom to render the React component.

```HTML
<div id="root"></div>
```

```JSX
ReactDOM.render(<MyComponent />, document.querySelector("#root"));
```

### Passing Arrays as Props

Passing a JavaScript array as props to a child component while demonstrating the difference between a class style React Component and a "Stateless Functional Component".

```JSX
const List = props => {
  return <p>{props.tasks.join(', ')}</p>;
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <List tasks={['Eat', 'Sleep', 'Repeat']} />
      </div>
    );
  }
}
```

### Passing State as Props

Passing state as props to a child component.

```JSX
const Navbar = props => {
  return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
  );
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Name'
    };
  }

  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}
```

### Default Props & PropTypes

React provides useful type-checking features to verify that components receive props of the correct type.

```JSX
import PropTypes from 'prop-types';

const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

// Setting the default value of a components props.
Items.defaultProps = {
  quantity: 0
};
```

### React Class Properties

Class properties are a change to JavaScript itself, and are not only helpful to React. In general, the change is to replace class functions with arrow functions, which does not have their own context. When invoked, the value of `this` will be the class instance.

Without class properties:

```JSX
class MyClass {
  action() {
    console.log('Performed action: ' + this.value);
  }

  constructor(value) {
    this.value = value;
  }
}

const actionClass = new MyClass('Action');
const actionButton = document.getElementById('actionButton');

// Binding 'this' to the context belonging to the class MyClass.
actionButton.addEventListener('click', actionClass.action.bind(actionClass));
```

With class properties:

```JSX
class MyClass {
  action = () => {
    console.log('Performed action:' + this.value);
  };

  constructor(value) {
    this.value = value;
  }
}

const actionClass = new MyClass('Action');
const actionButton = document.getElementById('actionButton');

// With class properties the bind becomes unnecessary.
actionButton.addEventListener('click', actionClass.action);
```

If a React project are using the Babel transform `transform-class-properties`, using class properties in React allows for multiple improvements. Below is a standard React class:

```JSX
class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({ on: !this.state.on });
  }

  render() {
    const buttonLabel = this.state.on ? 'Toggle Off' : 'Toggle On';
    const classNames = this.state.on ? 'btn btn-success' : 'btn btn-secondary';

    return (
      <button className={classNames} onClick={this.toggleState}>
        {buttonLabel}
      </button>
    );
  }
}
```

Using class properties, the above code can be written as (note that the constructor is removed as it had not functionality anymore):

```JSX
class ToggleButton extends React.Component {
  state = { on: false };

  toggleState = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    const buttonLabel = this.state.on ? 'Toggle Off' : 'Toggle On';
    const classNames = this.state.on ? 'btn btn-success' : 'btn btn-secondary';

    return (
      <button className={classNames} onClick={this.toggleState}>
        {buttonLabel}
      </button>
    );
  }
}
```

Class properties can also be `static`, making them available on the class only, instead of the class instance, which introduces the improvement that `defaultProps` and `propType` can be declared as static class properies within a React component class instead of outside of the class.

```JSX
class MyComponent extends React.Component {
  static defaultProps = { name: ['Name'] };
  static propTypes = { name: PropTypes.string.isRequired };

  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}
```

The above code equals (and is transformed to by Babel):

```JSX
class MyComponent extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

ItemList.defaultProps = {
  name: 'Name',
};

ItemList.propTypes = {
  name: PropTypes.string.isRequired,
};
```

### Passing Callbacks as Props

Passing handler functions to a child component allows the child component to interact with their parent component, and allows the parent component to handle the state.

```JSX
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    // Binding 'this' in the constructor results in 'this' being bound to the class methods at
    // the time of component initalization, allowing for referencing the class 'this' when
    // calling this.setState() inside handleChange().
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <GetInput value={this.state.inputValue} handleChange={this.handleChange} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}
```

### Render Props

The term `render prop` refers to a technique for sharing rendering code, state and behaviour between React components. A render prop is a function, passed as a prop, that a component uses to know what to render. This can be either HTML or another component. The function has access to the receiving components behaviour and state. In short, a component with the render prop receives a function that is used to render instead of implementing its own render logic.

The Mouse component in the example belov renders an image of a cat next to the mouse pointer. The Cat component is a child of the Mouse component, making the dependency between the components explicit. Making the app render a Dog component in addition to the Cat would require either adding the Dog component to the Mouse's render method, or having two different Mouse components: MouseWithCat and MouseWithDog.

```JSX
const Cat = (props) => {
  const state = props.state;
  return <img src="cat.png" alt="Cat" style={{ position: 'absolute', left: state.x, top: state.y }} />;
};

class Mouse extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    console.log(event);
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <Cat state={this.state} />
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <Mouse />
    </div>
  );
};
```

```JSX
// The Cat component renders an image of a cat, using the coordinates in the state provided by its props.
const Cat = (props) => {
  const state = props.state;
  return <img src="cat.png" alt="Cat" style={{ position: 'absolute', left: state.x, top: state.y }} />;
};

class Mouse extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // The Mouse component calls the provided render-prop function with it's state as argument.
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// The App component defines the render-prop function that is provided to the Mouse component.
const App = () => {
  return (
    <div>
      <Mouse render={(state) => <Cat state={state} />} />
    </div>
  );
};
```

The example below shows the advantage of using render props, as reusing the Mouse component with a different render function, does not require a change of the Mouse component.

```JSX
// A Dog component could be rendered without changing the Mouse component.
const App = () => {
  return (
    <div>
      <Mouse render={(state) => <Cat state={state} />} />
      <Mouse render={(state) => <Dog state={state} />} />
    </div>
  );
};
```

It's not necessary to use a prop named `render` to implement a render prop. Any name can be used, also the default `children` prop, which allows write the rendering function directly inside the component element since it does not have to be in the names list of props.

```JSX
class Mouse extends Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <Mouse>
        {(state) => <Cat state={state} />}
      </Mouse>
    </div>
  );
}
```

Another alternative approach would be to just add use the Cat and the Dog components as the Mouse's children, but that would not allow sharing the Mouse's state unless using anther pattern named `Compound Components`.

```JSX
export default function App() {
  return (
    <div>
      <Mouse>
        <Cat />
        <Dog />
      </Mouse>
    </div>
  );
}
```

The code exmaples in this chapter is mostly a slightly modified version of the code found in the React [Render Props](https://reactjs.org/docs/render-props.html) documentation.

### The '&&' Logical Operator

See [Logical Operators]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators") in the Mozilla Javascript Reference.

```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }

  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    return (
      <div>
        {/* Dynamic binding 'this' in render() instead for in the constructor */}
        <button onClick={this.toggleDisplay.bind(this)}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}
```

### Inlince CSS Styles

Inline CSS can be altered programmatically.

```JSX
const fontStyle = {
  color: 'red',
  fontSize: 18
};

let inputStyle = {
  border: '1px solid black'
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true
    };
  }

  render() {
    // Inline CSS can be changed conditionally.
    if (this.state.condition) {
      inputStyle.border = '2px solid red';
    }
    return (
      <div>
        <input style={inputStyle} />
        <div style={fontStyle}>Font</div>
      </div>
    );
  }
}
```

### Controlled Input

Form control elements like `input` and `textarea` maintain their own state in the DOM. With React, the state can be moved into a React component's state. React will control the value of the input field, and the input becomes part of the application state. When typing in input field, the text is processed by the `handleChange()` method and set as the `input` property in the local state before being rendered as the value in the input box on the page, hence the component state becomes the single source of truth for the input value.

```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
```

### Controlled Forms

Using React to control the internal state for form elements also applies to the regular HTML `form` element itself.

```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.submit}</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit!</button>
        </form>
      </div>
    );
  }
}
```

### Manage Updates with Lifecycle Methods

React components have several special methods that provide opportunities to perform actions at specific points in the life cycle of a component. These are called life cycle methods, or life cycle hooks, and allow you to catch components at certain points in time;

Mounting and rendering are considered different things in the component life cycle. When a page first loads, components are mounted before being rendered. The former is where the methods componentWillMount() and componentDidMount() are called. After mounting, all state changes will trigger a re-render of the components.

* componentWillMount()
* componentDidMount()
* componentWillUnmount()
* componentWillReceiveProps()
* componentWillUpdate()
* componentDidUpdate()
* shouldComponentUpdate()

```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }

  // Called before render(), when a component is being mounted to the DOM.
  componentWillMount() {
    console.log("Mounted to DOM.");
  }
  
  // Called after a component is mounted to the DOM. Best practice is to place  API calls here.
  // Setting the state with data from an API-call will automatically trigger an update once you
  // receive the data.
  componentDidMount() {
  // The timeout simulates a back end call.
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
    // This is also the best place to attach any event listeners you need to add for
    // specific functionality.
    document.addEventListener("keydown", this.handleKeyPress)
  }
  
  // It's good practice to use this life cycle method to do any clean up of React
  // components before they are unmounted and destroyed.
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  // Called whenever a component is receiving new props. Receives the new props as an argument,
  // which can be used to compare with this.props and perform actions before the component
  // updates, like calling setState() before the update is processed.
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  // Called just before after a component re-renders. In this case also after
  // componentWillReceiveProps().
  componentWillUpdate() {
    console.log('Component is about to update.');
  }
  
  // Called immediately after a component re-renders.
  componentDidUpdate() {
    console.log("Component has updated.")
  }

  // The default behavior is that your component re-renders when it receives new props, even
  // if the props haven't changed. You can use shouldComponentUpdate() to prevent this by
  // comparing the old and the new props. Called after componentWillReceiveProps().
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.value % 2 == 0;
  }

  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};
```

## Redux

Redux is a state management framework that can be used with a number of different web technologies, including standalone or with React (or other frameworks).

### Creating and Using a Redux Store

Redux provides a single state object that's responsible for the entire application state. All React components in a Redux app will use the same Redux store to manage the application state.

```JSX
// Reducer functions are used to let Redux know how to respond to dispatched actions.
// A reducer takes state as argument and returns a new state. This is the reducers only job.
// It has no other side effects.
const reducer = (state = 5) => {
  return state;
}

// The method createStore() is used to to create the Redux store. The method takes a reducer
// function as a required argument. The Redux state is read-only, hence the reducer must a
// copy of the state and never modify it directly. Redux does not enforce state immutability,
// making it the responsibility of the developer creating the reducer functions.
const store = Redux.createStore(reducer);

// Retrieving the current state held in the Redux store object with the getState() method.
const currentState = store.getState();
```

### Combine Multiple Reducers

Redux provides reducer composition as a solution to having a complex state model.

```JSX
const rootReducer = Redux.combineReducers({
  auth: counterReducer,
  notes: authReducer
});

const store = Redux.createStore(rootReducer);
```

### Actions

Updating state is one of the Redux core tasks. All state updates are triggered by dispatching actions. An action is a JavaScript object that contains information about an action event that has occurred. The store receives the action objects and updates the state accordingly.

```JSX
// It is common practice to assign action types to read-only constants.
const ADD = "ADD";

// The function addMessage() is an action creator, which is just a JavaScript
// function that returns an action. An action might carry data related to
// the action (e.g. a username after a user authentication event). The data is
// optional, but the action MUST carry a type property that specifies the 'type'
// of action that occurred.
function addMessage(message) {
  return {
    type: ADD,
    // ES6 supports setting the values of object literals without the keys if the keys are the
    // same as the names of the values passed to the function (as opposed to message: message).
    message
  };
}

function messageReducer(previousState, action) {
  // Using the Object Spread Operator to copy the state, hence never
  // mutating it.
  return [...previousState, action.message];
}

// Calling store.dispatch() dispatches actions to the Redux store.
store.dispatch(addMessage("Message"));

```

### Arrow style Action Creators and Reducers

Arrow style (as opposed to function style) method declaration of Action Creator and Reducer function.

```JSX
const ADD = 'ADD';

const addMessage = message => {
  return {
    type: ADD,
    message: message
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};
```

### redux-thunk Middleware

Redux provides a [middleware](https://redux.js.org/advanced/middleware) designed specifically for allowing asynchronous calls to backend endpoints called [Redux Thunk](https://github.com/reduxjs/redux-thunk).

```JSX
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

const requestingData = () => {
  return {
    type: REQUESTING_DATA
  };
};

const receivedData = data => {
  return {
    type: RECEIVED_DATA,
    users: data.users
  };
};

// When the handleAsync() function is dispatched, the redux-thunk middleware will intercept it
// and call it with dispatch() and getState() as arguments, which gives the thunk function
// the ability to run some logic, while still interacting with the Redux store.
const handleAsync = () => {
  return function(dispatch) {
    // Before initiating async method.
    dispatch(requestingData());
    // Simulate an async call.
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      };
      // When the async method completes.
      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: []
};

const dataReducer = (state = defaultState, action) => {
  // A Redux store can store can handle multiple action types within the same reducer.
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      };
    default:
      return state;
  }
};

const store = Redux.createStore(dataReducer, Redux.applyMiddleware(thunk));

store.dispatch(handleAsync);
```

## React + Redux

Because Redux is not designed to work with React out of the box, it's necessary to use the `react-redux` package. It provides a for passing Redux `state` and `dispatch` to React components as props.

### Connect Redux And React With react-redux

A `Provider` is a wrapper component from react-redux that wraps your React app. It allows access the Redux store and the dispatch functions throughout the component tree. It takes two props; the Redux store and the app child components.

```JSX
// react-redux is available as a global variable, allowing accessing the Provider
// using dot notation.
const Provider = ReactRedux.Provider;

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );
  }
}
```

### Map state and dispatch to Props

The Provider component allows providing state and dispatch to your React components, but the exact state and actions must be specified in order make sure that each component only has access to what it needs. The methods `mapStateToProps()` and `mapDispatchToProps()` are used to accomplish this. Use the methods to declare the state a component should have access to and which action creators it should be able to dispatch. Behind the scenes, react-redux uses the `store.subscribe()` method to implement `mapStateToProps()`.

```JSX
const state = [];

// Takes state as an argument and returns an object which maps that state to props.
// Can be access from props with "props.messages".
function mapStateToProps(state) {
  return {
    messages: state
  };
}

// The mapDispatchToProps() function is used to provide specific action creators to
// your React components so they can dispatch actions against the Redux store. It returns
// an object that maps dispatch actions to property names, which become component props.
// Instead of returning a piece of state, each property returns a function that calls
// dispatch with an action creator and any relevant action data. Behind the scenes, react-redux
// uses store.dispatch() to conduct these dispatches with "mapDispatchToProps()".
const addMessage = message => {
  return {
    type: 'ADD',
    message: message
  };
};

// submitNewMessage() can be called in the child component: this.props.submitNewMessage(message);
function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: message => {
      dispatch(addMessage(message));
    }
  };
}
```

### Connect Redux to React using connect()

Once the `mapStateToProps()` and `mapDispatchToProps()` methods are in place, the react-redux `connect()` method can be used to to connect them to components.

The `MyComponent` component is a presentation component, meaning it is not directly connected to Redux. It is simply responsible for the presentation of UI and do this as a function of the props they receive. By contrast, container components are connected to Redux, and are typically responsible for dispatching actions to the store and pass store state to child (presentational) components as props.

```JSX
 class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

// Pass in the mapStateToProps() and mapDispatchToProps() methids as arguments
// and immediately call the result with the presentation component. The connected
// component is returned.
const connect = ReactRedux.connect;
const ConnectedComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Presentational);
```

### A Complete React App

An app only using React state management for reference:

```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
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
            return <li key={id}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.querySelector("#root"));

```

### Using React.createRef()

In a typical React data flow, props are the way that parent components interact with their children. Re-render a component with new props in order to visually modifying ut. However, there are cases where imperative modification of a child outside of React data flow is preferable. The child to be modified could be an instance of a React component, or a DOM element. like a form element as in this example.

[Refs](https://reactjs.org/docs/refs-and-the-dom.html) are created using `React.createRef()` and provides a way to access DOM nodes or React elements created in the render method. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

There are a few good use cases for refs:

* Managing focus, text selection, or media playback.
* Triggering imperative animations.
* Integrating with third-party DOM libraries.

The example below uses refs to get the value of a input element. However, this can also, and should, be done declarative using the state.

```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.textInput = React.createRef();
  }

  handleChange(event) {
    this.setState({
      messages: this.state.messages
    });
  }

  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.textInput.current.value]
    });
    this.textInput.current.value = '';
  }

  render() {
    return (
      <div>
        <h1>Add Message:</h1>
        <input onChange={this.handleChange.bind(this)} ref={this.textInput} />
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((message, id) => {
            return <li key={id}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.querySelector("#root"));
```

### A Complete React + Redux App

The same app as in the two previous examples, but with Redux used for state management.

```JSX
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    this.props.addMessage(this.state.input);
    this.setState({
      input: ''
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, id) => {
            return <li key={id}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const ADD = 'ADD';

const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

const mapStateToProps = state => {
  return { messages: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: message => {
      dispatch(addMessage(message));
    }
  };
};

const AppContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(MyComponent);

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

const Provider = ReactRedux.Provider;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
```

### Using `React.bindActionCreators()`

Replace the code in the above example that creates `mapDispatchToProps` with `Redux.bindActionCreators()`.
The use case for `bindActionCreators()` is when passing action creators down to a component that isn't aware of Redux, and one don't want to pass `dispatch()` function or the Redux store to it. This is not different from manually creating a `mapDispatchToProps` function programatically .

```JSX
const actions = {
  addMessage: (message) => {
    return {
      type: ADD,
      message,
    };
  },
};

const mapDispatchToProps = dispatch => {
  return Redux.bindActionCreators(actions, dispatch);
};
```

Combine the above example into a single method:

```JSX
const AppContainer = ReactRedux.connect(
  function mapStateToProps(state) {
    return {
      messages: state,
    };
  },
  function mapDispatchToProps(dispatch) {
    return Redux.bindActionCreators(actions, dispatch);
  }
)(MyComponent);
```
