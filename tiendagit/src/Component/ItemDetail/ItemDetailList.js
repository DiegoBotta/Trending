import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns, Container,Row } from 'react-bootstrap';

const ItemDetailList = ({productosDetails}) => {
    
    
    return (
<>
{productosDetails.map((dato)=>
 
        <ItemDetail
        key={dato.id}
        img={Bicicleta}
        description={dato.description}
        id={dato.id}
        title={dato.title}
        price={dato.price}
        stock= {dato.stock}
        />
      

)}  
</>
        )



}

export default ItemDetailList