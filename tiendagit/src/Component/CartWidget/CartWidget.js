import react,{useState,useContext, useEffect} from 'react'
import Cart from '../../assets/Cart.png'
import {CartContext,Carrito} from '../Container/Context/CartContext'
import ItemDetail from '../ItemDetail/ItemDetail'
import Bicicleta from '../../assets/bicicletaGiant.jpg'
import { Form,Card,Table, Button, CardColumns,Container,Row } from 'react-bootstrap';
import {getFirestore} from '../../firebase'
import firebase from 'firebase/app'
const CartWidget = () => {
    const[cart,setCart] = useContext(CartContext)
    const[total,setTotal] = useState(0)
    const[user,setUser]= useState({
        name: "Diego",
        phone: "113941255",
        mail: "diego@hotmail.com"
      }

      )
      const[order,setOrder]= useState({}
    )
    const[id,setId] = useState("")
    
const db= getFirestore()
const orders= db.collection("orders")


const deleteTask = (taskToDelete) => {
    console.log("Llegue al delete")
    console.log(taskToDelete.id)
    let cartNew = cart.filter(i => i.id !== taskToDelete.id)
    console.log(cartNew)

    setCart(cartNew)

    console.log(cart)

    }

    useEffect(()=>{
      let costoFinal = cart.reduce((a,v) =>  a = a + (parseInt(v.price* v.cantidad)) , 0 )
      setTotal(costoFinal)
    },  [cart])
/*const calcularTotal = () => {
   let costoFinal = cart.reduce((a,v) =>  a = a + (parseInt(v.price* v.cantidad)) , 0 )
   setTotal(costoFinal)
   console.log(total)
   console.log(costoFinal)
creaOrden()
}*/

const creaOrden = () => {
 let order = {
    buyer:{name: user.name,
      email: user.mail},
      date: firebase.firestore.Timestamp.fromDate(new Date()),
   cart,
   total
  }
 cart.length && setOrder(order)
console.log(order)
}

useEffect(()=> {
 if( order.cart ){
   orders.add(order)
   .then((res)=> setId(res.id))
   console.log(id)
 }},[order])



const texto = () => {
    if(cart.length !== 0){
      return  <h1>tenes compras</h1>
    } else {
     return   <h1>no tenes ninguna compra</h1>
    }

}

function Form2() {
  function handleChange(evt) {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value,
        [evt.target.name]: value
      }); console.log(state)
    }

const [state, setState] = useState({
  firstName: "",
  lastName: ""
})
return (
    <>
  <form>
    <label>
      First name
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
      />
    </label>
    <label>
      Last name
      <input
        type="text"
        name="lastName"
        value={state.lastName}
        onChange={handleChange}
      />
    </label>
  
  </form>
  </>
);
}

    return(
        <>

        <div style={{display: cart.length === 0 ? 'none' : 'block' }} >
<Table  striped bordered hover>
<thead >
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
    <td><img src={dato.img} height="70" /></td>
    <td>{dato.title}</td>
    <td>{dato.description}</td>
    <td>{dato.cantidad}</td>
    <td>{dato.price} ars</td>
    <td>
    <p><button onClick={() => deleteTask(dato)} >Quitar</button></p>

    </td>

  </tr>


)} 

<tr>
    <th></th>
    <th></th>
    <th></th>
    <th>Total</th>
    <td>${total}</td>
    <td><p><button onClick={() => creaOrden()} style={{display: cart.length !== 0 ? 'block' : 'none' }} >Checkout</button></p>
</td>
    <td></td>
    <td></td>

    </tr>
</tbody>
</Table> </div>
 <h1  style={{display: cart.length === 0 ? 'block' : 'none' }}>Por el momento no hay elementos en el carrito</h1> 
 <div>
    <h2 style={{display: id.length > 0  ? 'block' : 'none' }}> Orden ID creada: {id}</h2>
    <h2 style={{display: id.length > 0  ? 'block' : 'none' }}>Gracias por su compra</h2>
    </div>

       

</>

    )


}
export default CartWidget


