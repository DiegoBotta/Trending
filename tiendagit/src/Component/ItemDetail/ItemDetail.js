import React,{useContext} from 'react';
import { Card, Button,Container,Row,Col} from 'react-bootstrap';
import Contador from '../Container/Contador/Contador'


const ItemDetail = ({id,price,title,description,img,stock}) => {

  return (
      
        <>
<div className="text-center">
<Container>
        <Row>
          <Col/>
          <Col>
        <Card>
        <Card.Img variant="right" src={img}
        width={300}
    height={200}
    alt="171x180" /> 
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>
         
          
          </Card.Text>
          <p>Descripción: {description}</p>
         <p> Valor del producto ${price}</p>
          Stock disponible : {stock}

        </Card.Body>
        </Card> 
        </Col>
          <Col/>
        </Row>
      </Container>
        </div>

        
</>
    )


}

export default ItemDetail


