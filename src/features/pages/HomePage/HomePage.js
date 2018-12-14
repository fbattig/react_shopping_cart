import React, { Component } from 'react'
import Products from '../../Products/Products';
import data from '../../../data/products.json'

export class HomePage extends Component {
  render() {
    return (
      <div >
        <h1>Home Page</h1>
        <Products products={data.products}/>
      </div>
    )
  }
}

export default HomePage

