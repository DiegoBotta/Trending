import React from 'react';
import { Card,Container,Row,Col} from 'react-bootstrap';


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
        width={330}
    height={250}
    alt="330x250" /> 
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


