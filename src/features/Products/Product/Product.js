import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './Product.css';

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
      <div>${props.product.price}</div>
      <div>
        <Button
          btnType="Success"
          clicked={() => props.addToCart(props)}
        > Add to Cart ({
            (props.cartItem && props.cartItem.quantity) || 0
        })</Button>
      </div>
    </div>
  )
}

export default product