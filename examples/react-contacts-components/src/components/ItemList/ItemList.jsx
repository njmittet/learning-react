import React from 'react';

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

export default ItemList;
