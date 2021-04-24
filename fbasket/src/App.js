import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderListing from "./pages/OrderListing";
import OrderDetails from "./pages/OrderDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={OrderListing} />
          <Route path="/orders/:orderId" component={OrderDetails} />
          <Route> 404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
