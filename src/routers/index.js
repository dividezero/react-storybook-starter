import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../screens/home';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Route path='/' exact component={Home} />
    </Fragment>
  </Router>
);

export default AppRouter;
