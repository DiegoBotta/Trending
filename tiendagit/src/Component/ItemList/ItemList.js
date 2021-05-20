import React from 'react';
import Item from '../Item/Item';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns } from 'react-bootstrap';

const ItemList = () => {
    return (
<>
<div>
<CardColumns>

<Card >
        <Item
        img={Bicicleta}
        description="Bicicleta Giant de ruta"
        id="123"
        title="Giant TCR 2021"
        price="400000"
        />
</Card >
<Card >
  <Item
        
        img={Bicicleta}
        description="Bicicleta Giant de ruta"
        id="123"
        title="Giant TCR 2021"
        price="400000"
        />
        </Card >
        <Card >
        <Item

        img={Bicicleta}
        description="Bicicleta Giant de ruta"
        id="123"
        title="Giant TCR 2021"
        price="400000"
        />
            </Card>
            </CardColumns>
        </div>
</>
            )



}

export default ItemList