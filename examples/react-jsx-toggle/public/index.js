'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleState", () => {
      this.setState({
        on: !this.state.on
      });
    });

    _defineProperty(this, "state", {
      on: false
    });
  }

  render() {
    const buttonLabel = this.state.on ? 'Toggle Off' : 'Toggle On';
    const classNames = this.state.on ? 'btn btn-success' : 'btn btn-secondary';
    return /*#__PURE__*/React.createElement("button", {
      className: classNames,
      onClick: this.toggleState
    }, buttonLabel);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(ToggleButton, null), document.querySelector('#app'));