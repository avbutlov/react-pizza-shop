import React, { useState } from "react";
import "./scss/app.scss";
import { Header } from "./components";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Home, Cart } from "./pages";
import axios from "axios";
import { setPizzes } from "./redux/actions/pizzes";

function App({ items, setPizzes }) {
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setPizzes(data.pizzes);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={items} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    items: state.pizzes.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzes: (items) => dispatch(setPizzes(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
