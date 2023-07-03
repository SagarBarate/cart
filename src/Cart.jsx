import React from 'react';
import CartItem from './CartItem';

// props are similar to arguments 

class Cart extends React.Component {


    constructor(){
        super(); //we are inherting the custructor from parent class
        this.state={
            products :[
                {
                price:999,
                title:'Watch',
                qty:1,
                img:'',
                id:1
                },
                {
                    price:999,
                    title:'Mobile phone',
                    qty:10,
                    img:'',
                    id:2
                },
                {
                    price:999,
                    title:'Laptop',
                    qty:4,
                    img:'',
                    id:3
                }
            ] 
        }
      }

      handleIncreaseQuantity =(product) =>{
        console.log('Hey increase the quantity of', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;
        this.setState({
            products
        })


      }
      handleDecreaseQuantity =(product) =>{                               // used to decrease the qty of the card item
        console.log('Hey increase the quantity of', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if (product[index].qty === 0 ){
            return;
        }
        
        products[index].qty -=1;
        this.setState({
            products
        })


      }

    render(){
        const {products} = this.state;
        return(
            <div className='cart'>
                {products.map ((product) => {
                    return (<CartItem 
                         product={product}
                         key={product.id}
                         onIncreaseQuantity ={this.handleIncreaseQuantity}
                         onDecreaseQuantity ={this.handleDecreaseQuantity}
                         />)
                })}
            </div>
        );
    }

  
}
export default Cart;
