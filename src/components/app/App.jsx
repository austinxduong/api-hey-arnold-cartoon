/* eslint-disable max-len */
import React, { Component } from 'react';

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
            // component={addComponentVariableHere}
          />
          {/* value of the route path below, will be the first key, that lives inside a nested array */}
          {/* this grabs the specific character, by its _id, as shown in the api json data */}
          <Route path="/:_id" exact={true}
            // component={addComponentDetailPageHere}
          />

        </Switch>
      </Router>
    );
  }

}
