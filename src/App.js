import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './components/Cart/CartContext';



function App() {

    return (
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route index path="/" element={<ItemListContainer />} />
                        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
    )
}


export default App