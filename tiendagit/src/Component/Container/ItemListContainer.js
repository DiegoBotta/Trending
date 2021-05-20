import React, { useState,useEffect  } from 'react';
import ItemList from '../ItemList/ItemList';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns, Container,Row } from 'react-bootstrap';


const ItemListContainer = () => {

     const [datos,setDatos] = useState([]);
 
  
  
     useEffect(()=>{
          const prueba = new Promise((resolve,reject)=>{
      const catalogo =[
          {
              
              img:{Bicicleta},
             description:"Bicicleta Giant de ruta tope de gama",
               id:"1",
               title:"Giant TCR 2021 tope de gama",
               price:"400000",
              
           }, {
              
               img:{Bicicleta},
              description:"Bicicleta Giant de ruta media gama",
                id:"2",
                title:"Giant TCR 2021 media gama",
                price:"300000",
               
            },
            {
              
               img:{Bicicleta},
              description:"Bicicleta Giant de ruta baja gama",
                id:"3",
                title:"Giant TCR 2021 baja gama",
                price:"100000",
               
            }
     ]
     
          setTimeout(() => {
             resolve(catalogo)  
          }, 2000);
     })  
    
    prueba.then((res)=>{
        setDatos(res)
     

     })
     .catch(()=>{
console.log("HUBO PROBLEMAS")

     })

},[])
         


     return(
<>
       {datos.length > 0 ?    
        <CardColumns>
              <ItemList productos={datos} />     </CardColumns>
              :
      "Cargando..."}
</>
          )

     } 
export default ItemListContainer