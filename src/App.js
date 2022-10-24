import { render } from '@testing-library/react';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


class App extends React.Component {

  constructor(){
    super();
    this.state ={
        products:[],
        loading :true
    }
    this.db =firebase.firestore();
}

componentDidMount(){
// firebase
// .firestore()
// .collection('products')
// .get()
// .then((snapshot)=>{
//   // console.log(snapshot);
//   snapshot.docs.map((doc)=>{
//     console.log(doc.data());
//   });
//   const products = snapshot.docs.map((doc)=>{
//     const data = doc.data();
//     data['id']=doc.id;
//     return data;
//   })
//   this.setState({
//     products :products,
//     loading: false
//   })
// })
this.db
.collection('products')
// .where('price', '==', 900)
// .where('title', '==', 'Laptop')
.orderBy('price', 'desc')
.onSnapshot((snapshot)=>{
  snapshot.docs.map((doc)=>{
    console.log(doc.data());
  });
  const products = snapshot.docs.map((doc)=>{
    const data = doc.data();
    data['id']=doc.id;
    return data;
  })
  this.setState({
    products :products,
    loading: false
  })
})
}


increaseProduct =(product) => {
    const {products} = this.state;
    const index =products.indexOf(product);

    const docRef =this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty+1
    })
    .then(()=>{
      console.log('Updated successfully');
    })
    .catch((error)=>{
      console.log('Error', error);
    })
}

decreaseProduct=(product)=>{
    const {products}=this.state;
    const index = products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
   
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty-1
    })
    .then(()=>{
      console.log('Decrease Successfully');
    })
    .catch((error)=>{
      console.log('error', error);
    })

}

deleteProduct =(id)=>{
    const docRef =this.db.collection('products').doc(id);

    docRef.delete()
    .then(()=>{
      console.log('Deleted Successfully');
    })
    .catch((error)=>{
      console.log('error', error);
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

addProduct =()=>{
  this.db
  .collection('products')
  .add({
    img: '',
    price: 900,
    qty: 3,
    title: 'Laptop'
  })
  .then((docRef)=>{
    console.log(' Product has been added',docRef);
  })
  .catch((error)=>{
    console.log('Error', error);
  })
}

  render(){
    const {products} =this.state;
  return (
    <div className="App">
    <h1>Cart</h1>
    <Navbar 
    count= {this.getCartCount()}/>
    {/* <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a Product</button> */}
    <Cart 
    products = {products}
    onIncreaseQuantity={this.increaseProduct}
    onDecreaseQuantity={this.decreaseProduct}
    onDeleteProduct={this.deleteProduct}/>

  {this.state.loading &&<h1>Loading Products...</h1>}
    <div style={{ padding:5, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
    
    </div>
  );
  }
}

export default App;
