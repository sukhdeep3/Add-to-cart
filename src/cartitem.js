import React from 'react';

const CartItem = (props)=> {
                                                // constructor(){
                                                //     super();
                                                //     this.state ={    don't need state due to props
                                                //         price: 999,
                                                //         title: 'Mobile Phone',
                                                //         qty: 1,
                                                //         img: ''
                                                //     }
                                                //     // this.testing();
                                                //    // this.increaseQuantity = this.increaseQuantity.bind(this);
                                                // }


                                                                    // testing(){
                                                                    //     const promise =new Promise((resolve, reject) =>{
                                                                    //         setTimeout(()=>{
                                                                    //             resolve('done');
                                                                    //         },5000)
                                                                    //     })

                                                                    //     promise.then(()=>{
                                                                    //         this.setState({
                                                                    //             qty: this.state.qty + 10
                                                                    //         })
                                                                    //         this.setState({
                                                                    //             qty: this.state.qty + 10
                                                                    //         })
                                                                    //         this.setState({
                                                                    //             qty: this.state.qty + 10
                                                                    //         })
                                                                    //     })
                                                                    // }




                                            //use arrow function it will automatically bind the this to a function
                                                // increaseQuantity = () => {
                                                //     // console.log('this.state', this.state);
                                                //     // setState form 1
                                                //     // this.setState({
                                                //     //     qty : this.state.qty +1
                                                //     // })

                                                //     //setState form 2 -if prevState require
                                                //     this.setState((prevState) => {
                                                //         return {
                                                //             qty : prevState.qty +1
                                                //         }
                                                //     })
                                                // }

                                                // decreaseQuantity =()=>{
                                                //     const {qty} =this.state;
                                                //     if(qty===0){
                                                //         return;
                                                //     }
                                                //     this.setState((prevState)=>{
                                                //         // console.log('hello');
                                                //         return {
                                                //             qty : prevState.qty -1
                                                //         }
                                                //     })
                                                // }

    // render (){
        // this.setState();
        const {title, price, qty} =props.product;
        const {
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity,
            onDeleteProduct
        } = 
        props;

        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
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
                         onClick ={()=>onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons"  
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                        onClick={()=> onDecreaseQuantity(product)}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons"  
                        src="https://cdn-icons-png.flaticon.com/128/484/484611.png"
                        onClick ={() =>onDeleteProduct(product.id)} 
                        />
                    </div>
                </div>

            </div>
        );
    }
// }

const styles ={
image: {
    height: 110,
    width :110,
    borderRadius: 4,
    backgroundColor: 'grey'
}

}

export default CartItem;