import React from 'react';
import CartItem from './cartitem';

class Cart extends React.Component{
render(){
    return(
        <div>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
}
}
export default Cart;