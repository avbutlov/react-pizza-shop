import React, { useState } from "react";
import PropTypes from "prop-types";

function PizzaItem({ imageUrl, name, types, sizes, price }) {
  const pizzaTypes = ["thin", "normal"];
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(0);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, ind) => {
            return (
              <li
                onClick={() => {
                  setActiveType(ind);
                }}
                className={activeType === ind ? "active" : ""}
                key={type + ind}
              >
                {pizzaTypes[type]} crust
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((size, ind) => {
            return (
              <li
                onClick={() => {
                  setActiveSize(ind);
                }}
                className={activeSize === ind ? "active" : ""}
                key={size + ind}
              >
                {size}cm
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">From {price}$</div>
        <div
          className="button button--outline button--add"
          onClick={() => {
            setPizzaCount(pizzaCount + 1);
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>{pizzaCount}</i>
        </div>
      </div>
    </div>
  );
}

PizzaItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  price: PropTypes.number,
};

PizzaItem.defaultProps = {
    name: '...',
    types: [],
    sizes: [],
    price: 0,
    imageUrl: ''
}


export default PizzaItem;
