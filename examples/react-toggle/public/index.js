'use strict';

// See https://reactjs.org/docs/react-without-jsx.html for syntax explanation.
const e = React.createElement;

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState((state) => ({ on: !state.on }));
  }

  render() {
    const buttonLabel = this.state.on ? 'Toggle Off' : 'Toggle On';
    const classNames = this.state.on ? 'btn btn-success' : 'btn btn-secondary';

    return e('button', { class: classNames, onClick: this.toggleState }, buttonLabel);
  }
}

ReactDOM.render(e(ToggleButton), document.querySelector('#app'));
