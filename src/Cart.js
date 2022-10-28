import React from "react";
import CartItem from "./CartItem";
const Cart= (props)=>{
        const {products}=props
        return (
            <div className="cart">
                {products.map((product)=>{
                    return (
                    <CartItem 
                    count={props.count}
                    product={product} 
                     key={product.id}
                     onIncreaseQuantity={props.onIncreaseQuantity} 
                     onDecreaseQuantity={props.onDecreaseQuantity}
                     handleDeleteProduct={props.handleDeleteProduct}/>
                    )
                })}
            </div>
        )
   
}

export default Cart;