import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ values }) => {
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
};

ItemList.propTypes = {
  values: PropTypes.array.isRequired,
};

ItemList.defaultProps = {
  values: [],
};

export default ItemList;
