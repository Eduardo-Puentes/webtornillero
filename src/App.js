import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Mayoristas from './components/Mayoristas';
import Catalogo from './components/Catalogo';
import Nosotros from './components/Nosotros';
import Pedidos from './components/Pedidos';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
      {!user && <Route path="/" element={<Navbar/>} >
        <Route path='/webtornillero' exact element={<Dashboard/>}/>
        <Route path='/mayoristas' exact element={<Mayoristas/>}/>
        <Route path='/catalogo' exact element={<Catalogo/>}/>
        <Route path='/pedidos' exact element={<Pedidos/>}/>
        <Route path='/nosotros' exact element={<Nosotros/>}/>
      </Route>}
    </Routes>
    </div>
  );
}

export default App;
