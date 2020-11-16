'use strict';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleState = () => {
    this.setState((state) => ({ on: !state.on }));
  };

  state = { on: false };

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
