import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import DetalleProducto from './pages/DetalleProducto';
import { useState } from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';


function App() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find(item => item.id == producto.id);
            if (existe) {
                if (existe.catidad < producto.stock) {
                    return prevCarrito.map((item) => item.id == producto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
                }
            } else {
                alert('No hay mas stock de este producto');
                return prevCarrito;
            }
            return [...prevCarrito, { ...producto, cantidad: 1 }];

        })
    };

    const aumentarCantidad = (id) => {
        setCarrito((prevCarrito) => {
            prevCarrito.map((item) => {
                if (item.id == id) {
                    return { ...item, cantidad: item.cantidad + 1 }
                }
                return item;
            })
        })
    };

    const disminuirCantidad = (id) => {
        setCarrito((prevCarrito) => {
            prevCarrito.map((item) => {
                if (item.id == id) {
                    return { ...item, cantidad: item.cantidad - 1 }
                }
                return item;
            })
        })
    };

    const eliminarProducto = (id) => {
        setCarrito((prevCarrito) => {
            prevCarrito.filter((item) => item.id !== id)
        })
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/catalogo" element={<Catalogo agregarAlCarrito={agregarAlCarrito} />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
                <route path="/carrito" element={<Carrito carrito={carrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad} eliminarProducto={eliminarProducto} vaciarCarrito={vaciarCarrito} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;