import react,{useState,useContext} from 'react'
import Cart from '../../assets/Cart.png'
import {CartContext,Carrito} from '../Container/Context/CartContext'
import ItemDetail from '../ItemDetail/ItemDetail'
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns,Container,Row } from 'react-bootstrap';


const CartWidget = () => {
    const[cart,setCart] = useContext(CartContext)
console.log(cart)
    return(
        <>
       
   
        {cart.map((dato)=>
     <div>
         <CardColumns>
            <ItemDetail
            key={dato.id}
            img={Bicicleta}
            description={dato.description}
            id={dato.id}
            title={dato.title}
            price={dato.price}
            stock= {dato.stock}
            />
            </CardColumns>
  </div>
        )}

</>

    )


}
export default CartWidget


