'use strict';

// See https://reactjs.org/docs/react-without-jsx.html for syntax explanation.
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Clicked!';
    }

    return e('button', { onClick: () => this.setState({ liked: true }) }, 'Click Me');
  }
}

ReactDOM.render(e(LikeButton), document.querySelector('#app'));
