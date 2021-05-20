import React from 'react';
import { Card, Button, CardColumns,Container,Row } from 'react-bootstrap';


const Item = ({id,price,title,description,img}) => {

    return (
        <>
   
        <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>
          Valor del producto ${price}
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Agregar al carrito</Button>
        </Card> 
</>
    )


}

export default Item


