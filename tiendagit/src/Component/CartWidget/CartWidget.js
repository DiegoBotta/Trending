/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Cart from '../../assets/Cart.png'
const CartWidget = () => {

    return(
        <div >
         <img src={ Cart } className="cartWidget" alt="Un carrito de compras"/>
        </div>


    )


}
export default CartWidget