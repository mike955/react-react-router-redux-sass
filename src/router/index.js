import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "../App";
import Login from '../pages/form/login';
import Register from '../pages/form/register';

export default class ERouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/login"/>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
