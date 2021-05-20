import React from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap';


const Item = ({id,price,title,description,img}) => {

    return (
        <>
  
    

   
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>
          Valor del producto ${price}
          </Card.Text>
        </Card.Body>
        <Button variant="primary">Agregar al carrito</Button>
     
     
 

</>
    )


}

export default Item


