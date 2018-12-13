import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product/Product';
import classes from './Products.css';

class Products extends Component {
  render() {
    return (
      <div className={classes.Products}>
        {this.props.products.map(product => 
            <Product
              key={product.id}
              product={product}
              addToCart={this.props.addToCart}
              cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
              />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => { dispatch({ type: 'ADD', payload: item }) },
    removeFromCart : (item) => {dispatch({type:'REMOVE', payload: item})},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
