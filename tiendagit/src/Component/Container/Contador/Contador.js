import react,{useState} from 'react'


const Contador =(()=>{
const [value,setValue] = useState(0)
    
function add(){
    setValue(value +1)
}
function sub(){
    setValue(value -1)

}
return(  <>
<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"}}>
    <p>Cantidad de productos seleccionados: {value}</p></div>
   <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"}}
>  
<p><button onClick={add}>Agregar</button></p>
<p><button onClick={sub}>Quitar</button></p>
</div>
</>
)  }
)

export default Contador


