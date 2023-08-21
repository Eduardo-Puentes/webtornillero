import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Mayoristas from './components/Mayoristas';
import Catalogo from './components/Catalogo';
import Nosotros from './components/Nosotros';
import Pedidos from './components/Pedidos';
import { useEffect, useState } from 'react';

function App() {
  const user = localStorage.getItem("token");
  const [itemsCount, setItemsCount] = useState(0)

  useEffect(() => {
    if (!localStorage.getItem("count") || isNaN(localStorage.getItem("count"))) {
      setItemsCount(0)
    }else{
      setItemsCount(parseInt(localStorage.getItem("count")))
    }
  }, [])
  

  const handleCount = () => {
    setItemsCount(itemsCount + 1)
    localStorage.setItem("count", itemsCount + 1)
  }

  return (
    <div className="App">
      <Routes>
      {!user && <Route path="/" element={<Navbar itemsCount={itemsCount}/>} >
        <Route path='/webtornillero' exact element={<Dashboard/>}/>
        <Route path='/mayoristas' exact element={<Mayoristas/>}/>
        <Route path='/catalogo' exact element={<Catalogo handleCount={handleCount}/>}/>
        <Route path='/pedidos' exact element={<Pedidos/>}/>
        <Route path='/nosotros' exact element={<Nosotros/>}/>
      </Route>}
    </Routes>
    </div>
  );
}

export default App;
