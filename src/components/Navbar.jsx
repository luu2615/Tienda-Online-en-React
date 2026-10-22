import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

export default function BarraNavegacion({ cantidadCarrito = 0 }) {
    return (
        <Navbar bg="warning" variant="warning" expand="lg" sticky="top" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-boombox" viewBox="0 0 16 16">
                        <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                        <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                        <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                        <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M1 3v3h14V3zm14 4H1v7h14z" />
                    </svg>
                    <span className="fw-bold">Disonancia Armónica</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="menu-navegacion" />

                <Navbar.Collapse id="menu-navegacion">
                    <Nav className="ms-auto align-items-lg-center gap-2">
                        <Nav.Link as={NavLink} to="/" className='btn btn-outline-light btn-sm px-3 ms-lg-2 mt-2 mt-lg-0 d-inline-flex align-items-center gap-2'>
                            Inicio
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/catalogo" className='btn btn-outline-light btn-sm px-3 ms-lg-2 mt-2 mt-lg-0 d-inline-flex align-items-center gap-2'>
                            Productos
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/carrito"
                            className="btn btn-outline-light btn-sm px-3 ms-lg-2 mt-2 mt-lg-0 d-inline-flex align-items-center gap-2"
                        >
                            <span>🛒</span>
                            {cantidadCarrito > 0 && (
                                <Badge bg="dark" pill>
                                    {cantidadCarrito}
                                </Badge>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
