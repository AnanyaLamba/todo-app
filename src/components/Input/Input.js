import React, { useState } from "react";

const Input = ({type, placeholder, value, onChange, onKeyDown}) => {
 
  return (
    <div className="w-full">
      <input
        type={type || "text"}
        placeholder={placeholder}
        className="w-full border-none outline-none py-2 px-4 text-xl"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Input;
