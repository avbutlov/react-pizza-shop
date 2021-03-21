import React from "react";
import { Categories, SortPopup, PizzaItem } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";

function Home() {
  const items = useSelector(({ pizzes }) => pizzes.items);
  const dispatch = useDispatch();
  const categoryNames = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Calzone"];
  const sortItems = [
    { name: "popularity", type: "rating" },
    { name: "price", type: "price" },
    { name: "alphabet", type: "name" },
  ];

  const onSelectCategory = React.useCallback((ind) => {
    dispatch(setCategory(ind))
  }, [])

  const onSelectSort = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          onClickItem={onSelectCategory}
        />
        <SortPopup
          items={sortItems}
          onClickItem={onSelectSort}
        />
      </div>
      <h2 className="content__title">All pizzes</h2>
      <div className="content__items">
        {items.map((el, ind) => {
          return <PizzaItem key={el + ind} {...el} />;
        })}
      </div>
    </div>
  );
}

export default Home;
