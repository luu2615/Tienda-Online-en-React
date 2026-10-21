// src/components/ProductoCard.jsx
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductoCard({ producto, onAgregarAlCarrito }) {
    const sinStock = producto.stock === 0;

    return (
        <Card className="h-100 shadow-sm border-0">
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <Card.Img
                    variant="top"
                    src={producto.imagen}
                    alt={producto.nombre}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <Badge
                    bg="dark"
                    style={{ position: 'absolute', top: '10px', left: '10px' }}
                >
                    {producto.categoria}
                </Badge>
            </div>

            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-5">{producto.nombre}</Card.Title>
                <Card.Text className="text-muted small flex-grow-1">
                    {producto.descripcion}
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center my-2">
                    <span className="fw-bold fs-5 text-primary">
                        ${producto.precio}
                    </span>

                    {sinStock ? (
                        <Badge bg="danger">Sin stock</Badge>
                    ) : (
                        <Badge bg="success">{producto.stock} disponibles</Badge>
                    )}
                </div>

                <div className="d-grid gap-2 mt-auto">
                    <Link to={`/producto/${producto.id}`} className="btn btn-outline-secondary btn-sm">
                        Ver detalle
                    </Link>
                    <Button
                        variant={sinStock ? "secondary" : "primary"}
                        size="sm"
                        disabled={sinStock}
                        onClick={() => onAgregarAlCarrito && onAgregarAlCarrito(producto)}
                    >
                        {sinStock ? "No disponible" : "Agregar al carrito"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
