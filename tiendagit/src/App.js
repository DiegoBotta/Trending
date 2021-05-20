import './App.css';
import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/Container/ItemListContainer'
import './index.css';

const saludo = 'Bienvenidos a mi tienda online'

function App() {
  return (
    <div>
        
      <header>
      <NavBar/>
      </header>
      <ItemListContainer greeting={saludo}/>
    </div>
   );
}

export default App;
