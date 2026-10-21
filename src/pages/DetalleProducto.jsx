import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button, Card, ListGroup, Alert } from "react-bootstrap";
import { productos } from "../data/productos";

export default function DetalleProducto({ agregarAlCarrito }) {
    const { id } = useParams();
    const producto = productos.find((p) => p.id == id);

    if (!producto) {
        return (
            <Container className="my-5 text-center">
                <Alert variant="danger">
                    Producto no encontrado
                </Alert>
                <Link to="/catalogo" className="btn btn-primary">
                    Volver al catálogo
                </Link>
            </Container>
        );
    }

    const sinStock = producto.stock === 0;
    const handleAgregar = () => {
        if (agregarAlCarrito) {
            agregarAlCarrito(producto);
        }
    }

    return (
        <Container className="my-5">
            <div className="mb-4">
                <Link to="/catalogo" className="btn btn-secondary">
                    <i className="bi bi-arrow-left"></i> Volver al catálogo
                </Link>
            </div>

            <Row className="g-5 aling-items-center">
                <Col md={6}>
                    <div className="border-rounded-4">
                        <img src={producto.imagen} alt={producto.nombre} className="img-fluid rounded-4 w-100" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="d-flex gap-2 mb-2">
                        <Badge bg="secondary" className="fs-6">
                            {producto.categoria}
                        </Badge>
                        {sinStock ? (
                            <Badge bg="danger">Sin stock</Badge>
                        ) : (
                            <Badge bg="success">
                                {producto.stock} disponibles
                            </Badge>
                        )}
                    </div>
                    <h1 className="display-5 fw-bold mb-3">
                        {producto.nombre}
                    </h1>
                    <div className="d-flex align-items-center mb-3">
                        <span className="fs-1 fw-bold text-primary">
                            ${producto.precio}
                        </span>
                    </div>
                    <p className="lead text-muted">
                        {producto.descripcion}
                    </p>
                    <div className="d-grid gap-3">
                        <Button
                            variant={sinStock ? "secondary" : "primary"}
                            size="lg"
                            disabled={sinStock}
                            onClick={handleAgregar}
                        >
                            {sinStock ? "No disponible" : "Agregar al carrito"}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
