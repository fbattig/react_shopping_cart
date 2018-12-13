import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/pages/HomePage/HomePage';
import Cart from '../../features/pages/Cart/cartPage';
import PageNotFound from '../../features/PageNotFound';

const router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={Cart} />
    <Route component={PageNotFound} />
  </Switch>
)

export default router
