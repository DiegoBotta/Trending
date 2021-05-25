import React, { useState,useEffect  } from 'react';
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card, Button, CardColumns, Container,Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import ItemDetailList from '../ItemDetail/ItemDetailList'
import Contador from '../Container/Contador/Contador'
import {getFirestore} from '../../firebase'


const ItemDetailContainer = () => {

     const [item,setItem] = useState([{}]);
     const {id} = useParams()

     useEffect(()=>{
          const db = getFirestore();
          const itemCollection = db.collection("Items")
          console.log(id)
          console.log(itemCollection)
          itemCollection.get()
          .then((querySnapShot)=>{
               querySnapShot.size === 0 ? console.log("No hay items"):
               console.log(`Hay ${(querySnapShot.size)} items`)
               const documentos = querySnapShot.docs.map((doc)=> {
                    return {
                         id: doc.id,
                         ...doc.data()
                    }} );
                    console.log(documentos)
                   const documentosFiltrados = documentos.find(i => i.id === id)
                    setItem([documentosFiltrados])
                    console.log(documentosFiltrados)
               })
          .catch((err)=>console.log("ocurrio un error"))
          .finally(()=>console.log("aca iria el loading"))
     },[])

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
