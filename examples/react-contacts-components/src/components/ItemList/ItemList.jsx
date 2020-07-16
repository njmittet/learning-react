import React from 'react';
import PropTypes from 'prop-types';

export default class ItemList extends React.Component {
  static defaultProps = { values: ['Contact'] };
  static propTypes = { values: PropTypes.array.isRequired };

  render() {
    const { values } = this.props;
    return (
      <ul className="list-group mt-3">
        {values.map((value, id) => {
          return (
            <li className="list-group-item py-2" key={id}>
              {value}
            </li>
          );
        })}
      </ul>
    );
  }
}
