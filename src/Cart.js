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
        
        //this.testing();
        
      }

    render(){
        const {products} = this.state;
        return(
            <div className='cart'>
                {products.map ((product) => {
                    return (<CartItem 
                         product={product}
                         key={product.id}/>)
                })}
            </div>
        );
    }

  
}
export default Cart;