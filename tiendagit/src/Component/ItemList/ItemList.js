import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productos}) => {

        
    
    return (
<>
{productos.map((dato)=>
 
        <Item
        key={dato.id}
        img={dato.img}
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