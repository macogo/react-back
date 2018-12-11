import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import home from "@/pages/home/home";

// router
export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
