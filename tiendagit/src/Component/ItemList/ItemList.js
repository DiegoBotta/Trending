import React from 'react';
import Item from '../Item/Item';
import Bicicleta from '../../assets/bicicletaGiant.jpg'

const ItemList = ({productos}) => {

        
    
    return (
<>
{productos.map((dato,index)=>
 
        <Item
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


export default ItemList