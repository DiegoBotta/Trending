import React, { useState,useEffect  } from 'react';
import ItemList from '../ItemList/ItemList';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import {  CardColumns } from 'react-bootstrap';

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
              <ItemList productos={datos} /></CardColumns>
         
              :
      "Cargando..."}
</>
          )

     } 
export default ItemListContainer