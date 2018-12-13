import React from 'react';
const removeBtn = (props) => {
  return <button
    onClick={() => props.removeFromCart(props.cartItem)}
  >Remove</button>
}

export default removeBtn;