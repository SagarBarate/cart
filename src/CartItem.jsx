import React from 'react';

class CartItem extends React.Component {

  constructor(){
    super(); //we are inherting the custructor from parent class
    this.state={
      price:999,
      title:'Mobile phone',
      qty:1,
      img:''
    }
    
  }
  increaseQuantity =() =>{
    //console.log('this.state', this.state);

    increaseQuantity =() =>{

      // console.log('this.state', this.state);
  
      // setState form 1
      // this.setState({
      //   qty:this.state.qty + 1   shallow merging will happen here with the parent object and react will render the new value
      // });
      
      //setState form 2
      this.setState((prevState)=>{
        return{
          qty: prevState.qty +1
        }
      })
  }
  render () {
    const {price, title, qty} = this.state;// object destructuring is done here that i want this properites from this.state object
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
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
          onClick={this.increaseQuantity}
          />

        <img alt="decrease" 
        className='action-icons' 
        src='https://cdn-icons-png.flaticon.com/128/3841/3841636.png'
        />
        
        <img alt="delete" 
        className='action-icons' 
        src='https://cdn-icons-png.flaticon.com/128/3096/3096687.png'
        />

          </div>
        </div>
      </div>
    );
  }
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