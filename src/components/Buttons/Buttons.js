import React from "react";

export const Button = ({ onClick, type, completed }) => {

  const buttonTypes = {
    edit: {
      className: "bg-blue-300 px-2 py-1 rounded-md hover:bg-blue-400 mr-2",
      icon: <i className="fi fi-rr-edit"></i>
    },
    save: {
      className: "bg-green-400 text-white px-2 py-1 rounded-md hover:bg-green-500 mr-2",
      icon: <i className="fi fi-bs-check"></i>
    },
    delete: {
      className: "bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600",
      icon: <i className="fi fi-rs-trash"></i>
    },
    toggleStatus: {
      className: "pt-1",
      icon: completed ? (
        <i className="fi fi-rr-check-circle text-green-500"></i>
      ) : (
        <i className="fi fi-ts-circle"></i>
      )
    }
  };

  return (
    <button className={buttonTypes[type]?.className} onClick={onClick}>
      {buttonTypes[type]?.icon}
    </button>
  );
};
