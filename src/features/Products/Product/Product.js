import React from 'react';
import classes from './Product.css';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';

const product = (props) => {
  
  return (
    <div className={classes.Product}>
      <h3> {props.product.name}</h3>
      <img
        alt=""
        height={100}
        title={props.name}
        src={`/products/${props.product.image}`} />
      <div>{props.product.description}</div>
      <div>Qty: {props.product.inventory}</div>
      <div>Price: ${props.product.price}</div>
      <div>

        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart} />
        {
          props.cartItem
            ?
            <RemoveBtn
              cartItem={props.cartItem}
              product={props.product}
              removeFromCart={props.removeFromCart} />
            : null
        }
      </div>
      
    </div>
  )
}

export default product