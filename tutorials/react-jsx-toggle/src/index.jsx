'use strict';

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

ReactDOM.render(<ToggleButton />, document.querySelector('#app'));
