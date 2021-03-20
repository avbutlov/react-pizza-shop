import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'

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

Button.propTypes = {
  onButtonClick: PropTypes.func
}

export default Button;
