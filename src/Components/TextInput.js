import React from 'react';

const TextInput = ({ label, name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} value={value} onChange={onChange} required={name === 'email'} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TextInput;
