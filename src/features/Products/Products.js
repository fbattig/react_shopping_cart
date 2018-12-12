import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product/Product';
import classes from './Products.css';
import { cartItemsWithQuantities } from '../pages/Cart/Cart';

class Products extends Component {
  render() {
    return (
      <div className={classes.Products}>
        {this.props.products.map(product => {
          return (
            <Product
              key={product.id}
              product={product}
              addToCart={this.props.addToCart}
              cart={cartItemsWithQuantities(this.props.cart)}
              />
         )
        })}
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
