import React, { useState,useEffect  } from 'react';
import ItemList from '../ItemList/ItemList';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import {  CardColumns } from 'react-bootstrap';
import {getFirestore} from '../../firebase'
const ItemListContainer = () => {

     const [datos,setDatos] = useState([]);
 
  
  
     useEffect(()=>{
          const db = getFirestore();
          const itemsCollection = db.collection("Items")
          itemsCollection.get()
          .then((querySnapShot)=>{
               querySnapShot.size === 0 ? console.log("No hay items"):
               console.log(`Hay ${(querySnapShot.size)} items`)
               const documentos = querySnapShot.docs.map((doc)=> {
                    return {
                         id: doc.id,
                         ...doc.data()
                    }} );
                        setDatos(documentos)
               })
          .catch((err)=>console.log("ocurrio un error"))
          .finally(()=>console.log("aca iria el loading"))
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