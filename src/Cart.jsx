import React from 'react';
import CartItem from './CartItem';

// props are similar to arguments 

const Cart = (props) => {
        const { products } = props;

        return(
            <div className='cart'>
                {products.map ((product) => {
                    return (
                        <CartItem 
                         product={product}
                         key={product.id}
                         onIncreaseQuantity ={props.onIncreaseQuantity}
                         onDecreaseQuantity ={props.onDecreaseQuantity}
                         onDeleteProduct ={props.onDeleteProduct}

                        />)
                })}
            </div>
        );
    }

  
export default Cart;
