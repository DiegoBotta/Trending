import React,{useState,useContext} from 'react'
import {  Button} from 'react-bootstrap';
import {CartContext} from '../Context/CartContext'

const Contador =(
{valueProduct} )=>{
    const[cart,setCart] = useContext(CartContext)
const [count,setCount] = useState(0)
function add() {
    setCount(count + 1)

}
function sub(){
    setCount(count -1)

}
const Agregado = (item,count) =>{
count !== 0 ? PushToCart(item,count) : alert("Tienes que elegir una cantidad")
}


const isInCart= (item) =>{

    const enElCart = cart.find(x=>x.id === item.id)
    if(enElCart !== undefined) {

        return true 
    } else {
    return false 
}}

const Evalua = (item,count) => {
    cart.forEach( i =>{
        if(i.id === item.id){
            if(i.cantidad !== (i.cantidad + count)){
                i.cantidad =  count
            }
        }
    })
    console.log(cart)

  }

    
 const PushToCart = (item,count) => {
    if(isInCart(item))
    {
        Evalua(item,count)
        console.log(...cart)
        return true
        alert("Ya has comprado este producto. Hemos actualizado la cantidad por la ultima elegida.")

    } else {    setCart([...cart,{...item,"cantidad":count}])
  alert("Se añadió el producto a su carrito")
  
}

}


return( 
     <>
<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>

    <p>Cantidad de productos seleccionados: {count}</p></div>
   <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>  
<p><button className="mr-1" onClick={add} disabled={count === parseInt(valueProduct.stock)}>Agregar</button></p>
<p><button className="mr-1" onClick={sub} disabled={count === 0} >Quitar</button></p>
<p><Button onClick={()=>Agregado(valueProduct,count)} variant="primary">Agregar al carrito</Button></p>

</div>
</>
)  }


export default Contador


