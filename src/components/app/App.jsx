/* eslint-disable max-len */
import React, { Component } from 'react';
// the fun part, lets hook everything we created into the router
import Cartoon from '../../containers/Cartoon';
import CartoonDetailPage from '../../containers/CartoonDetailPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {

  render() {
    return (


      <Router>
        <Switch>

          <Route path="/" exact={true}
            component={Cartoon}
          />
          {/* value of the route path below, will be the first key, that lives inside a nested array */}
          {/* this grabs the specific character, by its _id, as shown in the api json data */}
          <Route path="/:_id" exact={true}
            component={CartoonDetailPage}
          />

        </Switch>
      </Router>
    );
  }

}
