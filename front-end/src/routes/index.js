import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../containers/Main';
import Tela10 from '../containers/Tela10';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/cobrancas/avencer" component={Tela10} />
  </Switch>
);

export default Routes;
