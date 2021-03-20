import React, { useState } from "react";
import "./scss/app.scss";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Cart } from "./pages";

function App() {
  const [pizzes, setPizzes] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((json) => {
        setPizzes(json.pizzes)
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzes}/>} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
