import React from "react";
import classNames from "classnames";

const Button = ({ children, outline, onButtonClick, className }) => {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
