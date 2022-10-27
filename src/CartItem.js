import React from "react";
class cartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }

    increaseQuantity=()=>{
        console.log('this',this.state);
    }
    
    render(){
        const {price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                       <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="increase" className="action-icons" onClick={this.increaseQuantity}></img>
                       <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrease" className="action-icons"></img>
                       <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" className="action-icons"></img>

                    </div>
                </div>
            </div>
        )
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default cartItem;