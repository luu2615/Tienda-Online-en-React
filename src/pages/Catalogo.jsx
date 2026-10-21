import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productos } from '../data/productos';
import ProductoCard from './Producto';

export default function Catalogo({ agregarAlCarrito }) {
  return (
    <Container className="container my-5">
      <div className='mb-4 text-center'>
        <h1 className='fw-bold'>Catálogo de Productos</h1>
      </div>
      <div id="productos">
        <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
          {productos.map((producto) => (<Col key={producto.id}>
            <ProductoCard producto={producto} agregarAlCarrito={agregarAlCarrito} />
          </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
