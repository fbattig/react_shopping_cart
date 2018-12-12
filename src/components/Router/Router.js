import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../containers/HomePage/HomePage';
import Cart from '../../containers/Cart/Cart';
import PageNotFound from '../Miscelaneous/PageNotFond'

const router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={Cart} />
    <Route component={PageNotFound} />
  </Switch>
)

export default router
