import React from 'react';
import CartItem from './cartitem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state ={
            products:[
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 7,
                    img: '',
                    id:1
                },
                {
                    price: 499,
                    title: 'Watch',
                    qty: 3,
                    img: '',
                    id:2
                },
                {
                    price: 1499,
                    title: 'Laptop',
                    qty: 2,
                    img: '',
                    id:3
                }
            ]
        }
    }

render(){
    const {products} =this.state;
    // const arr =[1,2,3,4,5]
    return(
        <div>
            {/* {arr.map((item)=>{
                return item +5;  the way to iterate the array items
            })} */}
            
            {products.map((product)=>{
                return (
                <CartItem 
                product={product} 
                key={product.id}
                />
                )
            })}
        </div>
    );
}
}
export default Cart;