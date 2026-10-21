import React, { useState } from 'react';
import { Container, Row, Col, Spinner, Form, Card, Button, Badge, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productos } from '../data/productos';
import ProductoCard from './Producto';

export default function Catalogo({ agregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('todas');
  const [orden, setOrden] = useState('normal');
  const [soloConStock, setSoloConStock] = useState(false);

  const categoriasDisponibles = ['todas', ...new Set(productos.map((p) => p.categoria))];

  let productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLocaleLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria = categoria == 'todas' || producto.categoria == categoria;

    const coincideStock = !soloConStock || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  if (orden == 'menor-mayor') {
    productosFiltrados.sort((a, b) => a.precio - b.precio);
  } else if (orden == 'mayor-menor') {
    productosFiltrados.sort((a, b) => b.precio - a.precio);
  }

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoria('todas');
    setOrden('defecto');
    setSoloConStock(false)
  }

  return (
    <Container className="my-5">
      <div className="mb-4 text-center">
        <h1 className="fw-bold">Catálogo de Productos</h1>
        <p className="text-muted">Explorá nuestros instrumentos y accesorios</p>
      </div>
      <Card className="p-3 mb-4 shadow-sm border-0 bg-light">
        <Row className="g-3 align-items-center">
          <Col md={4}>
            <Form.Label className="small fw-bold">Buscar por nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Fender, Ibanez, Bajo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Col>
          <Col sm={6} md={3}>
            <Form.Label className="small fw-bold">Categoría</Form.Label>
            <Form.Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              {categoriasDisponibles.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'todas' ? 'Todas las categorías' : cat}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col sm={6} md={3}>
            <Form.Label className="small fw-bold">Ordenar por</Form.Label>
            <Form.Select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="defecto">Por defecto</option>
              <option value="menor-mayor">Precio: Menor a Mayor</option>
              <option value="mayor-menor">Precio: Mayor a Menor</option>
            </Form.Select>
          </Col>
          <Col md={2} className="d-flex flex-column justify-content-end">
            <Form.Check
              type="checkbox"
              id="solo-stock"
              label="Solo con stock"
              checked={soloConStock}
              onChange={(e) => setSoloConStock(e.target.checked)}
              className="mb-2"
            />
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={limpiarFiltros}
            >
              Limpiar filtros
            </Button>
          </Col>
        </Row>
      </Card>
      <div className="mb-3 text-muted small">
        Mostrando <strong>{productosFiltrados.length}</strong> de {productosFiltrados.length} productos
      </div>
      {productosFiltrados.length === 0 ? (
        <div className="text-center py-5">
          <h4>No se encontraron productos</h4>
          <p className="text-muted">Probá ajustando los filtros.</p>
          <Button variant="primary" onClick={limpiarFiltros}>
            Ver todos los productos
          </Button>
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {productosFiltrados.map((producto) => (
            <Col key={producto.id}>
              <ProductoCard
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}