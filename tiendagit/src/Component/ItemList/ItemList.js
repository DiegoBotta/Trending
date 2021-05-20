import React from 'react';
import Item from '../Item/Item';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns, Container,Row } from 'react-bootstrap';

const ItemList = ({productos}) => {
    
    
    return (
<>
{productos.map((dato)=>
 
        <Item
        img={Bicicleta}
        description={dato.description}
        id={dato.id}
        title={dato.title}
        price={dato.price}
        />
      

)}  
</>
        )



}

export default ItemList