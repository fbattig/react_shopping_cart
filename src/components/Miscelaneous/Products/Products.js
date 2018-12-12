import React from 'react'
import Product from './Product/Product';
import classes from './Products.css';

const products = (props) => {
  return (
    <div className={classes.Products}>
      {props.products.map( product => <Product product={product} /> )}
    </div>
  )
}

export default products
