import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import DetalleProducto from './pages/DetalleProducto';
import { useState, useEffect } from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';
import BarraNavegacion from './components/Navbar'


function App() {
    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem('carrito');
        return guardado ? JSON.parse(guardado) : [];
    });
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const cantidadTotalCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find(item => item.id == producto.id);
            if (existe) {
                if (existe.cantidad < producto.stock) {
                    return prevCarrito.map((item) =>
                        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                    );
                } else {
                    alert('No hay más stock disponible de este producto');
                    return prevCarrito;
                }
            }
            alert('Agregado al carrito')
            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    const aumentarCantidad = (id) => {
        setCarrito((prevCarrito) =>
            prevCarrito.map((item) => {
                if (item.id === id) {
                    if (item.cantidad < item.stock) {
                        return { ...item, cantidad: item.cantidad + 1 };
                    } else {
                        alert('Limite de stock alcanzado');
                    }
                }
                return item;
            })
        );
    };


    const disminuirCantidad = (id) => {
        setCarrito((prevCarrito) =>
            prevCarrito
                .map((item) =>
                    item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
                )
                .filter((item) => item.cantidad > 0)
        );
    };

    const eliminarProducto = (id) => {
        setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <BrowserRouter>
            <BarraNavegacion cantidadCarrito={cantidadTotalCarrito} />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/catalogo" element={<Catalogo agregarAlCarrito={agregarAlCarrito} />} />
                <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
                <Route path="/carrito" element={<Carrito carrito={carrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad} eliminarProducto={eliminarProducto} vaciarCarrito={vaciarCarrito} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;