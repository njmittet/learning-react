import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuBar extends Component {
  static propTypes = { children: PropTypes.node };

  static Item = ({ children }) => {
    return <li>{children}</li>;
  };

  render() {
    return (
      <div>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="mt-3 container">
      <MenuBar>
        <MenuBar.Item>Item 1</MenuBar.Item>
        <MenuBar.Item>Item 2</MenuBar.Item>
      </MenuBar>
    </div>
  );
}

export default App;
