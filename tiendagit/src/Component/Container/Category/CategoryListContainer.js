import React, { useState,useEffect  } from 'react';
import { CardColumns } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import ItemList from '../../ItemList/ItemList';
import {getFirestore} from '../../../firebase'

const ItemCategoryContainer = () => {

     const [categoria,setCategoria] = useState([{}]);
     const {id} = useParams()
     

     useEffect(()=>{
          const db = getFirestore();
          const itemCollectionCategory = db.collection("Items")
          console.log(id)
          console.log(itemCollectionCategory)
          itemCollectionCategory.get()
          .then((querySnapShot)=>{
               const documentosCategory = querySnapShot.docs.map((doc)=> {
                    return {
                         id: doc.id,
                         ...doc.data()
                    }} );
                   const documentosFiltradosCategory = documentosCategory.filter(i => i.categoryID === id)
                   setCategoria(documentosFiltradosCategory)
               })
     
     },[id])

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