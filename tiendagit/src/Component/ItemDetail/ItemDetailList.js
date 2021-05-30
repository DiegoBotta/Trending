import React,{useEffect, useState, useContext} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Card, Button, CardColumns, Container,Row } from 'react-bootstrap';
import Contador from '../Container/Contador/Contador'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import {CartContext,Carrito} from '../../Component/Container/Context/CartContext'

const ItemDetailList = ({productosDetails}) => {
    const[cart,setCart] = useContext(CartContext)


    return (
<>
{productosDetails.map((dato)=>
 <div className="container">
        <ItemDetail
        img={dato.img}
        description={dato.description}
        id={dato.id}
        title={dato.title}
        price={dato.price}
        stock= {dato.stock}/>

        <Contador    valueProduct={dato}
        /*            img={Bicicleta}
                 description={dato.description}
                 id={dato.id}
                 title={dato.title}
                 price={dato.price}
                 stock= {dato.stock}*/
                                />
 <div class="row justify-content-center">
                                
      <Link to={`/Cart`} > <button style={{display: cart.length !== 0 ? 'block' : 'none' }} disabled={cart.length === 0} size="lg">Terminar la compra</button> </Link>
     </div>
</div>
)}  
</>
        )



}




export default ItemDetailList