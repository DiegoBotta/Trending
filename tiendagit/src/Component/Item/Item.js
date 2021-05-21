import React from 'react';
import { Card, Button, CardColumns,Container,Row } from 'react-bootstrap';
import Contador from '../Container/Contador/Contador'
import {Link} from 'react-router-dom'


const Item = ({id,price,title,description,img,stock}) => {

    return (
        <>
   
        <Card> 
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>
          Valor del producto ${price}
          </Card.Text>
          Stock disponible : {stock}

        </Card.Body>
        <Contador/>
        <Button variant="primary">Agregar al carrito</Button>
        <Link to={`/item/${id}`}>
        <Button variant="warning">Ver más</Button>
        </Link>
        </Card> 
</>
    )


}

export default Item


