import './App.css';
import React from 'react';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/Container/ItemListContainer'
import './index.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ItemDetailContainer from './Component/ItemDetail/ItemDetailContainer'
import CartWidget from './Component/CartWidget/CartWidget'
import ItemCategoryContainer from './Component/Container/Category/CategoryListContainer'

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Switch>
       <Route path='/' exact component={ItemListContainer}>
      <ItemListContainer />
      </Route>
      <Route path='/category/:id' exact component={ItemCategoryContainer}>
      <ItemCategoryContainer />
      </Route>
      <Route path='/item/:id' exact component={ItemDetailContainer}></Route>
      <Route path='/cart' exact component={CartWidget}></Route>
      </Switch>
    </BrowserRouter>
   );
}

export default App;
