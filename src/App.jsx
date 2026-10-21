import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import DetalleProducto from './pages/DetalleProducto';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
                <Route path="/catalogo" element={<Catalogo></Catalogo>}></Route>
                <Route path="/contacto" element={<Contacto></Contacto>}></Route>
                <Route path="/producto/:id" element={<DetalleProducto></DetalleProducto>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;