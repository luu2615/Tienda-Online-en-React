import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Inicio() {
    return (
        <div>
            <section
                className="text-white text-center d-flex align-items-center justify-content-center position-relative py-5"
                style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(rgba(110, 110, 110, 0.24), rgba(18, 18, 18, 0.85)), url(https://images.unsplash.com/photo-1773093219310-711be04f4fa2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D) center/cover no-repeat',
                    backgroundColor: '#000000ff'
                }}
            >
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <h1 className="display-3 fw-bold mb-3">
                                Vendemos las mejores guitarras
                            </h1>
                            <p className="lead fs-4 text-light mb-4">
                                Y todo tipo de instrumentos y equipamiento musical para llevar tu sonido al siguiente nivel.
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <Button
                                    as={Link}
                                    to="/catalogo"
                                    variant="warning"
                                    size="lg"
                                    className="px-4 py-2 fw-semibold shadow"
                                >
                                    Explorar Catálogo
                                </Button>
                                <Button
                                    as={Link}
                                    to="/contacto"
                                    variant="outline-light"
                                    size="lg"
                                    className="px-4 py-2 fw-semibold"
                                >
                                    Contactanos
                                </Button>
                            </div>
                            <div className="mt-5 text-white opacity-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    fill="currentColor"
                                    className="bi bi-arrow-down"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                                    />
                                </svg>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">¿Por qué elegir Disonancia Armónica?</h2>
                        <p className="text-muted">
                            Pasión por la música, las mejores marcas y atención personalizada para músicos.
                        </p>
                    </div>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm text-center p-4">
                                <Card.Body>
                                    <div className="display-5 text-primary mb-3">🎸</div>
                                    <Card.Title className="fw-bold">Instrumentos Seleccionados</Card.Title>
                                    <Card.Text className="text-muted">
                                        Guitarras calibradas, bajos y percusión de primeras marcas listos para tocar.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm text-center p-4">
                                <Card.Body>
                                    <div className="display-5 text-primary mb-3">🚚</div>
                                    <Card.Title className="fw-bold">Envíos a Todo el País</Card.Title>
                                    <Card.Text className="text-muted">
                                        Embalaje especializado para que tu instrumento llegue en perfectas condiciones a tu puerta.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm text-center p-4">
                                <Card.Body>
                                    <div className="display-5 text-primary mb-3">🛡️</div>
                                    <Card.Title className="fw-bold">Garantía Oficial</Card.Title>
                                    <Card.Text className="text-muted">
                                        Todos nuestros productos cuentan con garantía y asesoramiento post-venta dedicado.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5 text-center text-white bg-dark">
                <Container>
                    <h3 className="fw-bold mb-3">¿Listo para encontrar tu próximo instrumento?</h3>
                    <p className="text-light opacity-75 mb-4">
                        Revisá nuestra selección de más de 20 productos con stock disponible y precios actualizados.
                    </p>
                    <Button
                        as={Link}
                        to="/catalogo"
                        variant="warning"
                        size="lg"
                        className="fw-bold px-4 py-2"
                    >
                        Ver Productos Ahora
                    </Button>
                </Container>
            </section>
        </div>
    );
}