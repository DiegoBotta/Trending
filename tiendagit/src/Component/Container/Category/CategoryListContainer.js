import React, { useState,useEffect  } from 'react';
import Bicicleta from '../../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns, Container,Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import ItemDetailList from '../../ItemDetail/ItemDetailList'
import ItemList from '../../ItemList/ItemList';

const ItemCategoryContainer = () => {

     const [categoria,setCategoria] = useState([{}]);
     const {id} = useParams()
     

     useEffect(()=>{
          const tasks = new Promise((resolve,reject)=>{
      const productosCategoria =[
          {   
               img:{Bicicleta},
              description:"Bicicleta Giant de ruta tope de gama",
                id:"1",
                title:"Giant TCR 2021 tope de gama",
                price:"400000",
                stock:"3",
                Categoria: "bicicletas"
 
               
            }, {
               
                img:{Bicicleta},
               description:"Bicicleta Giant de ruta media gama",
                 id:"2",
                 title:"Giant TCR 2021 media gama",
                 price:"300000",
                 stock:"2",
                 Categoria: "bicicletas"
 
             },
             {             
                img:{Bicicleta},
               description:"Bicicleta Giant de ruta baja gama",
                 id:"3",
                 title:"Giant TCR 2021 baja gama",
                 price:"100000",
                 stock:"4",
                 Categoria: "bicicletas"
 
                
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
             resolve(productosCategoria)  
          }, 200);
     })  
    
     tasks.then((res)=>{
        setCategoria(res.filter(i => i.Categoria === id))
      
     

     })

     .catch(()=>{
console.log("HUBO PROBLEMAS")

     })

},)
         

return(
     <>
            {categoria.length > 0 ?    
                <CardColumns>

                   <ItemList productos={categoria} /> 
                   </CardColumns>

                   :
           "Cargando..."}
     </>
               
     
)}
export default ItemCategoryContainer