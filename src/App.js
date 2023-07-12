import {Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
      {!user && <Route path="/" element={<Navbar/>} >
        <Route path='/' exact element={<Dashboard/>}/>
      </Route>}
    </Routes>
    </div>
  );
}

export default App;
