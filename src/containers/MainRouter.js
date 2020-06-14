import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "../routes";

function MainRouter(props) {
  return (
    <Router>
      <Switch>
        <Route
          path={routes.DEFAULT.route}
          component={routes.DEFAULT.component}
          exact
        />
        <Route
          path={routes.SIGN_UP.route}
          component={routes.SIGN_UP.component}
          exact
        />
      </Switch>
    </Router>
  );
}

export default MainRouter;
