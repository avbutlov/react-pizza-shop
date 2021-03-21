import React from "react";
import "./scss/app.scss";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Cart } from "./pages";
import { setPizzes } from "./redux/actions/pizzes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { sortBy, category } = useSelector(({ filters }) => {
    return {
      sortBy: filters.sortBy,
      category: filters.category,
    };
  });

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/pizzes?_sort=${sortBy}&_order=desc`)
      .then(({ data }) => {
        dispatch(setPizzes(data));
      });
  }, [sortBy]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
