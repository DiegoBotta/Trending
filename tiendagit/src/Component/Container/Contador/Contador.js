import react,{useState} from 'react'
import {  Button} from 'react-bootstrap';
import ItemDetailList from '../../ItemDetail/ItemDetailList'


const Contador =({id,price,title,description,img,stock})=>{
    
const [count,setCount] = useState(0)
let prueba = parseInt(stock)

function add() {
    setCount(count + 1)

}
function sub(){
    setCount(count -1)

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
<p><button onClick={add} disabled={count === prueba}>Agregar</button></p>
<p><button onClick={sub} disabled={count === 0} >Quitar</button></p>
<p><Button variant="primary">Agregar al carrito</Button></p>

</div>
</>
)  }


export default Contador


