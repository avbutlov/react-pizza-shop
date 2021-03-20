import React, {useState} from "react";

const Categories = ({ items }) => {
  const [activeItem, setAciveItem] = useState(0);

  return (
  
    <div className="categories">
      <ul>
        {items && items.map((el, ind) => {
          return (
            <li
              className={activeItem === ind ? "active" : ""}
              onClick={() => {
                setAciveItem(ind);
              }}
              key={el + ind}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
