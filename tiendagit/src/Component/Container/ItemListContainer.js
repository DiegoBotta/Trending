import React, { useState,useEffect  } from 'react';
import ItemList from '../ItemList/ItemList';
import {  CardColumns } from 'react-bootstrap';
import {getFirestore} from '../../firebase'
const ItemListContainer = () => {

     const [datos,setDatos] = useState([]);
 
  
  
     useEffect(()=>{
          const db = getFirestore();
          const itemsCollection = db.collection("Items")
          itemsCollection.get()
          .then((querySnapShot)=>{
               const documentos = querySnapShot.docs.map((doc)=> {
                    return {
                         id: doc.id,
                         ...doc.data()
                    }} );
                        setDatos(documentos)
               })
          .catch((err)=>console.log("ocurrio un error"+ err))
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