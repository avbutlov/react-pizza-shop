import React, { useState } from "react";
import "./scss/app.scss";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Cart } from "./pages";
import axios from "axios";

function App() {
  const [pizzes, setPizzes] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setPizzes(data.pizzes);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzes} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
