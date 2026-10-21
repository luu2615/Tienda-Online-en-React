import React, { useState } from 'react';
import { Container, Alert, Row, Col, Table, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Carrito({
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito
}) {
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
    const precioTotal = carrito.reduce((total, item) => total + item.cantidad * item.precio, 0);

    if (carrito.length === 0) {
        return (
            <Container className="my-5 text-center py-5">
                <h2 className="fw-bold mb-3">Tu carrito está vacío</h2>
                <p className="text-muted mb-4">No hay productos agregados todavía.</p>
                <Link to="/catalogo" className="btn btn-primary">
                    Ir al Catálogo
                </Link>
            </Container>
        );
    }


    return (
        <Container className='my-5'>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="fw-bold">Carrito de Compras</h1>
                <Link to="/catalogo" className="btn btn-outline-secondary btn-sm">
                    ← Seguir comprando
                </Link>
            </div>
            <Row className="g-4">
                <Col lg={8}>
                    <div className="table-responsive shadow-sm rounded border">
                        <Table hover className="align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Producto</th>
                                    <th className="text-center">Precio Unit.</th>
                                    <th className="text-center">Cantidad</th>
                                    <th className="text-end">Subtotal</th>
                                    <th className="text-center">Quitar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrito.map((item) => {
                                    const subtotal = item.precio * item.cantidad;
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <img
                                                        src={item.imagen}
                                                        alt={item.nombre}
                                                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '6px' }}
                                                    />
                                                    <div>
                                                        <strong className="d-block">{item.nombre}</strong>
                                                        <small className="text-muted">{item.categoria}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                ${item.precio.toLocaleString('es-AR')}
                                            </td>
                                            <td className="text-center">
                                                <div className="d-inline-flex align-items-center border rounded">
                                                    <Button
                                                        variant="light"
                                                        size="sm"
                                                        className="px-2 py-0 border-0"
                                                        onClick={() => disminuirCantidad(item.id)}
                                                    >
                                                        -
                                                    </Button>
                                                    <span className="px-3 fw-bold">{item.cantidad}</span>
                                                    <Button
                                                        variant="light"
                                                        size="sm"
                                                        className="px-2 py-0 border-0"
                                                        disabled={item.cantidad >= item.stock}
                                                        onClick={() => aumentarCantidad(item.id)}
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </td>
                                            <td className="text-end fw-bold text-primary">
                                                ${subtotal.toLocaleString('es-AR')}
                                            </td>
                                            <td className="text-center">
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() => eliminarProducto(item.id)}
                                                >
                                                    X
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col lg={4}>
                    <Card className="shadow-sm border-0 bg-light p-3">
                        <Card.Body>
                            <h4 className="fw-bold mb-3">Resumen</h4>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Total productos:</span>
                                <strong>{cantidadTotal}</strong>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="fs-5 fw-bold">Total a pagar:</span>
                                <span className="fs-4 fw-bold text-primary">
                                    ${precioTotal.toLocaleString('es-AR')}
                                </span>
                            </div>
                            <div className="d-grid gap-2">
                                <Button variant="success" size="lg" onClick={() => alert('¡Compra confirmada!')}>
                                    Confirmar compra
                                </Button>
                                <Button variant="outline-secondary" size="sm" onClick={vaciarCarrito}>
                                    Vaciar carrito
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}