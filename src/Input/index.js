import React from "react";

const Input = ({ placeholder, type, onChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
