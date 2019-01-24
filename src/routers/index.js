import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../screens/home';
import Tnc from '../screens/tnc';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Route path='/' exact component={Home} />
      <Route path='/tnc' exact component={Tnc} />
    </Fragment>
  </Router>
);

export default AppRouter;
