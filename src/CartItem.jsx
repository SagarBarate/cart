import React from 'react';

class CartItem extends React.Component {

  // constructor(){
  //   super(); //we are inherting the custructor from parent class
  //   this.state={
  //     price:999,
  //     title:'Mobile phone',
  //     qty:1,
  //     img:''
  //   }
  //this.increasingQuantity = this.increasingQuantity.bind(this);
  //   this.testing();
    
  // }
  // state is no longer needed here as we can use props and we can directly inherite from cart 

  // testing(){
  //   const promise = new Promise ((resolve ,reject) => {

  // //     setTimeout(() => {
  // //       resolve('done');
  // //     }, 5000)

  // //   })
  // //   promise.then(() => {
  // //     this.setState({qty:this.state.qty +10});

  // //     console.log('state', this.state);
  // //   });
  // // }


  //   decreaseQuantity= ()=>{
  //     //console.log()
  //     const{qty} =this.state;
  //     if(qty ===0){
  //       return;
  //     }

      
  //     this.setState({
  //       qty:this.state.qty -1


  //     })
  //   }

    
    

  //   increaseQuantity =() =>{

  //     // console.log('this.state', this.state);
  
  //     // setState form 1
  //     // this.setState({
  //     //   qty:this.state.qty + 1   shallow merging will happen here with the parent object and react will render the new value
  //     // });
      
  //     //setState form 2
  //     this.setState((prevState)=>{
  //       return{
  //         qty: prevState.qty +1
  //       }
  //     })
  // }
  render () {

    console.log('this.props', this.props)
    //const {price, title, qty} = this.state;// object destructuring is done here that i want this properites from this.state object
    const {price, title, qty} = this.props.product;
    
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
          onClick={() => this.props.onIncreaseQuantity(this.props.product)}
          />

        <img alt="decrease" 
        className='action-icons' 
        src='https://cdn-icons-png.flaticon.com/128/3841/3841636.png'
        onClick={() => this.props.onDecreaseQuantity(this.props.product)}
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