import React from 'react';
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ ptag, type, onClick, onChange }) => {
  return (
    <div className="btn">
      <button type={type} onClick={onClick} onChange={onChange}>
        {ptag}
      </button>
    </div>
  );
};

Button.prototype = {
  ptag: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Button;
