import React, { useState,useEffect  } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetailList from '../ItemDetail/ItemDetailList'
import {getFirestore} from '../../firebase'


const ItemDetailContainer = () => {

     const [item,setItem] = useState([{}]);
     const {id} = useParams()

     useEffect(()=>{
          const db = getFirestore();
          const itemCollection = db.collection("Items")
          itemCollection.get()
          .then((querySnapShot)=>{
                            const documentos = querySnapShot.docs.map((doc)=> {
                    return {
                         id: doc.id,
                         ...doc.data()
                    }} );
                   const documentosFiltrados = documentos.find(i => i.id === id)
                    setItem([documentosFiltrados])
               })
          .catch((err)=>console.log("ocurrio un error"))
          .finally(()=>console.log("aca iria el loading"))
     })

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
