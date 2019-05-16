import React from 'react'

const TextField = ({name, onChange, onBlur, error, label}) => (
  <div>
    <label>
      <input
        className="form-control" 
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
      />
      {error && <div>{error}</div>}
    </label>
  </div>
);

export default TextField;