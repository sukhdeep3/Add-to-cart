import { render } from '@testing-library/react';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {

  constructor(){
    super();
    this.state ={
        products:[
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 7,
                img: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                id:1
            },
            {
                price: 499,
                title: 'Watch',
                qty: 3,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1100&q=60',
                id:2
            },
            {
                price: 1499,
                title: 'Laptop',
                qty: 2,
                img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1100&q=60',
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
getCartCount =()=> {
const {products} =this.state;
let count =0;

products.forEach((product)=>{
  count +=product.qty;
})
return count;
}


getCartTotal = ()=>{
  const {products} =this.state;

  let cartTotal =0;
  products.map((product)=>{
    cartTotal = cartTotal+ product.qty* product.price;
  })
  return cartTotal;
}

  render(){
    const {products} =this.state;
  return (
    <div className="App">
    <h1>Cart</h1>
    <Navbar 
    count= {this.getCartCount()}/>
    <Cart 
    products = {products}
    onIncreaseQuantity={this.increaseProduct}
    onDecreaseQuantity={this.decreaseProduct}
    onDeleteProduct={this.deleteProduct}/>

    <div style={{ padding:10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
    
    </div>
  );
  }
}

export default App;
