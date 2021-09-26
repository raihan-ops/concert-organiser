import React from 'react';
import Name from './Name';
import './Cart.css';

const Cart = (props) => {
    
    const {cart}=props;
  

    let sum=0;
    for (const cost of cart) {
        sum=sum+cost.cost;

    }
    return (
        <div className="cart-body">
           <h3>Cart</h3>
           <p>Band Count: {cart.length}</p>
           <div className="cart-name-body">
           {
              cart.map(band=><Name
              name={band}></Name>)
          }
           </div>
          
          <hr className="hr" />
           <p>Total cost: {sum} $</p>

        </div>
    );
};

export default Cart;