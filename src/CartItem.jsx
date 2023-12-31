import React from 'react';

const CartItem = (props) => {
  
    const {price, title, qty} = props.product; //object destructuring is done here

    const {product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct} = props;   //object destructuring is done here 

    
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>{price}</div>
          <div style={ { color: '#777' } }>Qty:{qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}


        <img alt="increase"
         className='action-icons'
          src='https://cdn-icons-png.flaticon.com/128/992/992651.png'
          onClick={() => onIncreaseQuantity(product)}
          />

        <img alt="decrease" 
        className='action-icons' 
        src='https://cdn-icons-png.flaticon.com/128/3841/3841636.png'
        onClick={() => onDecreaseQuantity(product)}
        />
        
        <img alt="delete" 
        className='action-icons' 
        src='https://cdn-icons-png.flaticon.com/128/3096/3096687.png'
        onClick={() => onDeleteProduct(product.id)}
        />

          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;
