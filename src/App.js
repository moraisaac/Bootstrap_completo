import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';


function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index path="/" element={<ItemListContainer />} />
                    <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App





// function App() {
//   let contenido = 'Titulo List Container'

//   return (
//     <div className="App">
//       <NavBar />
//       <ItemListContainer param1 = {contenido} />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
