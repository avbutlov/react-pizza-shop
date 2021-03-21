import React from "react";
import "./scss/app.scss";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Cart } from "./pages";
import { setPizzes, fetchPizzes } from "./redux/actions/pizzes";
import { useDispatch } from "react-redux";

function App() {


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
