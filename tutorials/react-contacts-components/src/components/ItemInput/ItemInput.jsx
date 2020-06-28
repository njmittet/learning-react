import React from 'react';

const ItemInput = ({ onChange, onSubmit, inputValue, buttonValue }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" className="form-control" onChange={onChange} value={inputValue} />
        <button className="btn btn-primary mt-3" type="submit">
          {buttonValue}
        </button>
      </form>
    </div>
  );
};

export default ItemInput;
