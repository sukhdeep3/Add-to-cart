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

    increaseProduct =(product) => {
        console.log("Hello", product);
        const {products} = this.state;
        const index =products.indexOf(product)

        products[index].qty +=1;
        this.setState({
            products
        })
    }

    decreaseProduct=(product)=>{
        console.log("hello", product);
        const {products}=this.state;
        const index = products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty -=1;

        this.setState({
            products
        })
    
    }

    deleteProduct =(id)=>{
        const {products}=this.state;
        const items = products.filter((item)=>item.id !==id);
        
        this.setState({
            products :items
        })
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
                onIncreaseQuantity={this.increaseProduct}
                onDecreaseQuantity={this.decreaseProduct}
                onDeleteProduct={this.deleteProduct}
                />
                )
            })}
        </div>
    );
}
}
export default Cart;