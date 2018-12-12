import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Products from '../../containers/Products/Products';
import Cart from '../../containers/Cart/Cart';
import PageNotFound from '../Miscelaneous/PageNotFond'

const router = () => (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route exact path="/cart" component={Cart} />
    <Route component={PageNotFound} />
  </Switch>
)

export default router
