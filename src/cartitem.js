import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state ={
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
  //use arrow function it will automatically bind the this to a function
    increaseQuantity = () => {
        console.log('this.state', this.state);
    }

    render (){
        const {title, price, qty} =this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: 'grey'}}>Rs {price}</div>
                    <div style={{color: 'grey'}}> Qty: {qty}</div>
                    <div className="class-item-actions" >
                        {/* buttons */}
                        <img
                         alt="increase" 
                         className="action-icons"  
                         src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                         //onClick={this.increaseQuantity.bind(this)}
                         onClick ={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons"  
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                        />
                        <img 
                        alt="delete" 
                        className="action-icons"  
                        src="https://cdn-icons-png.flaticon.com/128/484/484611.png" 
                        />
                    </div>
                </div>

            </div>
        );
    }
}

const styles ={
image: {
    height: 110,
    width :110,
    borderRadius: 4,
    backgroundColor: 'grey'
},

}

export default CartItem;