import React, { useState,useEffect  } from 'react';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns, Container,Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import ItemDetailList from '../ItemDetail/ItemDetailList'
import Contador from '../Container/Contador/Contador'

const ItemDetailContainer = () => {

     const [item,setItem] = useState([{}]);
     const {id} = useParams()
     useEffect(()=>{
          const task = new Promise((resolve,reject)=>{
      const productosDetails =[
          {   
               img:{Bicicleta},
              description:"La bicicleta de mayor rendimiento de la marca.",
                id:"1",
                title:"Giant TCR Advanced SL",
                price:"400000",
                stock:"3",
                Categoria: "bicicleta"
 
               
            }, {
               
                img:{Bicicleta},
               description:"Bicicleta Giant de ruta media gama",
                 id:"2",
                 title:"Giant TCR 2021 media gama",
                 price:"300000",
                 stock:"2",
                 Categoria: "bicicleta"
 
             },
             {             
                img:{Bicicleta},
               description:"Bicicleta Giant de ruta baja gama",
                 id:"3",
                 title:"Giant TCR 2021 baja gama",
                 price:"100000",
                 stock:"4",
                 Categoria: "bicicleta"
 
                
             }
             ,
             {             
                img:{Bicicleta},
               description:"Ruedas de bicicleta de carbono",
                 id:"4",
                 title:"Ruedas de competición",
                 price:"150000",
                 stock:"5",
                 Categoria: "componentes"
 
                
             }
             ,
             {             
                img:{Bicicleta},
               description:"Ruedas de bicicleta de aluminio",
                 id:"5",
                 title:"Ruedas de entrenamiento",
                 price:"50000",
                 stock:"6",
                 Categoria: "componentes"
 
                
             }
     ]
     
          setTimeout(() => {
             resolve(productosDetails)  
          }, 200);
     })  
    
     task.then((res)=>{
        setItem(res.filter(i => i.id === id))
      
     

     })

     .catch(()=>{
console.log("HUBO PROBLEMAS")

     })

},)
         

return(
     <>
            {item.length > 0 ?    
         <div>
                   <ItemDetailList productosDetails={item} /> 
                   
                   </div>
                  
                   :
           "Cargando..."}
     </>
               
     
)}
export default ItemDetailContainer