import React ,{useState} from 'react'
import './App.css';
import Home from './components/home'
import Login from './components/login';

function App() {
  const [usuario, setUsuario]= useState(null)
  return (
    <div className="">
      {usuario ? <Home/>:<Login/>}
    </div>
  );
}

export default App;
