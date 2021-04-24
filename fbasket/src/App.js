import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./config/routes.config";
import ProductsListing from "./pages/ProductsListing";
import OrdersListing from "./pages/OrdersListing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={ROUTES.LANDING} exact component={ProductsListing} />
          <Route path={ROUTES.ORDERS} exact component={OrdersListing} />
          <Route> 404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
