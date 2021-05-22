import React,{useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns, Container,Row } from 'react-bootstrap';
import Contador from '../Container/Contador/Contador'

const ItemDetailList = ({productosDetails}) => {
        

    return (
<>
{productosDetails.map((dato)=>
 <div>
        <ItemDetail
        key={dato.id}
        img={Bicicleta}
        description={dato.description}
        id={dato.id}
        title={dato.title}
        price={dato.price}
        stock= {dato.stock}
        />
       
        <Contador 
                 img={Bicicleta}
                 description={dato.description}
                 id={dato.id}
                 title={dato.title}
                 price={dato.price}
                 stock= {dato.stock}
                                /></div>
)}  
</>
        )



}




export default ItemDetailList