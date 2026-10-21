import React, { useState } from 'react';
import { Container, Alert, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Carrito({
    carrito,
    onAumentar,
    onDisminuir,
    onEliminar,
    onVaciar
}) {
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
    const precioTotal = carrito.reduce((total, item) => total + item.cantidad * item.precio, 0);

    return (
        <Container className='my-5'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1>Carrito de Compras</h1>
                <p className='text-muted'>
                    {carrito.length === 0 ?
                        "No hay productos en el carrito"
                        : `Tienes ${cantidadTotal} productos en el carrito`}
                </p>
            </div>
        </Container>
    );
}