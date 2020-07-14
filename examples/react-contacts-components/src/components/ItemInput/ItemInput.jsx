import React from 'react';
import PropTypes from 'prop-types';

const ItemInput = ({ onChange, onSubmit, inputValue, buttonValue, placeHolder }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" className="form-control" onChange={onChange} value={inputValue} placeholder={placeHolder} />
        <button className="btn btn-primary mt-3" type="submit">
          {buttonValue}
        </button>
      </form>
    </div>
  );
};

ItemInput.propTypes = {
  placeHolder: PropTypes.string,
};

ItemInput.defaultProps = {
  placeHolder: 'John Doe',
};

export default ItemInput;
