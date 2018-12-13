import React from 'react';
import { connect } from 'react-redux';

function sort(items) {
  return items.sort((a,b) => a.id < b.id)
}

const cart = (props) => {
  return <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Quatity</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        sort(props.cart).map(item => <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>
            <button
              onClick={() => props.addToCart(item)}
            >+</button>
            
            <button
              onClick={() => props.removeFromCart(item)}
            >-</button>
          </td>
          <td><button
            onClick={() => props.removeAllFromCart(item)}
          >Remove All</button></td>
        </tr>)
      }
    </tbody>
  </table>
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (item) => { dispatch({ type: 'ADD', payload: item }) },
    removeFromCart: (item) => { dispatch({ type: 'REMOVE', payload: item }) },
    removeAllFromCart: (item) => { dispatch({ type: 'REMOVE_ALL', payload: item }) }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(cart);
