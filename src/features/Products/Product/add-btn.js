import React from 'react';

const addBtn = (props) => {
  return <button
    disabled={props.cartItem && !(props.cartItem.inventory-props.cartItem.quantity) > 0}
    onClick={() => props.addToCart(props.product)}
    >Add to cart ({
      (props.cartItem && props.cartItem.quantity) || 0
    })</button>
}

export default addBtn;