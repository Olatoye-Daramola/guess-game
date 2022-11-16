import React from 'react';
import "./InputField.css";
import PropTypes from "prop-types";

const InputField = ({ value, type, onChange, placeholder }) => {
  return (
    <div className="input-field">
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputField;
