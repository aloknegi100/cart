import React from "react";
const cartItem=(props)=>{
    
        const {price,title,qty}=props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,handleDeleteProduct}=props;
        return (
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image} src={product.img} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                       <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="increase" className="action-icons" onClick={()=>onIncreaseQuantity(product)}></img>
                       <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrease" className="action-icons" onClick={()=>onDecreaseQuantity(product)}></img>
                       <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" className="action-icons" onClick={()=>handleDeleteProduct(product.id)}></img>

                    </div>
                </div>
            </div>
        )
    
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