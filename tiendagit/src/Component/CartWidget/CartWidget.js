import react,{useState,useContext, useEffect} from 'react'
import Cart from '../../assets/Cart.png'
import {CartContext,Carrito} from '../Container/Context/CartContext'
import ItemDetail from '../ItemDetail/ItemDetail'
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Card,Table, Button, CardColumns,Container,Row } from 'react-bootstrap';


const CartWidget = () => {
    const[cart,setCart] = useContext(CartContext)
console.log(cart)


const deleteTask = (taskToDelete) => {
    console.log("Llegue al delete")
    console.log(taskToDelete.id)
    let cartNew = cart.filter(i => i.id !== taskToDelete.id)
    console.log(cartNew)

    setCart(cartNew)

    console.log(cart)

    }

const calcularTotal = () => {
   const costoFinal = cart.reduce((a,v) =>  a = a + (parseInt(v.price* v.cantidad)) , 0 )
    console.log(costoFinal)
   alert("El costo final de su compra es " + costoFinal )

}
const texto = () => {
    if(cart.length !== 0){
      return  <h1>tenes compras</h1>
    } else {
     return   <h1>no tenes ninguna compra</h1>
    }

}

    return(
        <>

        <div >
<Table striped bordered hover>
<thead>
  <tr>
    <th>Imagen</th>
    <th>Nombre del producto</th>
    <th>Descripción</th>
    <th>Cantidad</th>
    <th>Precio</th>
    <th>Opciones</th>

  </tr>
</thead>
<tbody>  
   
        {cart.map((dato)=>

  <tr>
    <td><img src={Bicicleta} height="70" /></td>
    <td>{dato.title}</td>
    <td>{dato.description}</td>
    <td>{dato.cantidad}</td>
    <td>{dato.price} ars</td>
    <td>
    <p><button onClick={() => deleteTask(dato)} >Quitar</button></p>

    </td>

  </tr>


)} 
    <p><button onClick={() => calcularTotal()} style={{display: cart.length !== 0 ? 'block' : 'none' }} >Terminar compra</button></p>
 <h1  style={{display: cart.length === 0 ? 'block' : 'none' }}>Por el momento no hay elementos en el carrito</h1>
</tbody>
</Table>  
</div>
       

</>

    )


}
export default CartWidget


