import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailConatainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

    const onAdd = (cant) => {
        console.log(cant)
    }

    return (
        <>
            <NavBar />
            <ItemListContainer />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            <ItemDetailConatainer />
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
