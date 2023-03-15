import { useState } from 'react'
import './assets/styles/styles.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './Containers/ItemDetailsContainer';
import Header from './Containers/header/Header';
import HomePage from "./Pages/HomePage/HomePage"
import CartPage from './Pages/CartPage/CartPage';
import CartProvider from './context/CartProvider.js ';


function App() {
  return (
    <div className='topWrapper'>
      <section className="content">
        
        <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            
            <Route path='/' element={<HomePage />} />
            <Route path='/item/:id' element={<ItemDetailsContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<div><h1>Esta página no existe</h1></div>} />

          </Routes>
          </CartProvider>
        </BrowserRouter>

      </section>
    </div>
  )
}

export default App;