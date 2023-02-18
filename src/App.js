import header from './components/Header/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Navbar from './components/Header/Navbar';
import Datos from './components/pages/Datos';

import "./App.css"

 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Servicios' element={<Datos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
