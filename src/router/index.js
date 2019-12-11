import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "../App";
import Main from "../main";
import Login from "../pages/form/login";
import Register from "../pages/form/register";
import Home from '../pages/home';
import NoMatch from '../pages/noMatch'
import 'antd/dist/antd.css';
export default class ERouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/api/home" />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/"
              render={() => 
                <Main>
                  <Switch>
                    <Route path="/api/home" component={Home} />
                    <Route path="*" component={NoMatch} />
                  </Switch>
                </Main>
              }
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
