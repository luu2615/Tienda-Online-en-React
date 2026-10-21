import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert, Modal } from 'react-bootstrap';

export default function FormularioCompra({ carrito, totalGeneral, onVaciarCarrito }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        metodoEntrega: 'envio',
        mensaje: ''
    });

    const [errores, setErrores] = useState({});

    const [showModal, setShowModal] = useState(false);
    const [datosConfirmados, setDatosConfirmados] = useState(null);

    const cambio = (item) => {
        const { name, value } = item.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        if (errores[name]) {
            setErrores((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validar = () => {
        const nuevosErrores = {};
        if (!carrito || carrito.length === 0) {
            nuevosErrores.carrito = 'El carrito está vacio.';
        }

        if (!formData.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre y apellido es obligatorio.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            nuevosErrores.email = 'El email es obligatorio.';
        } else if (!emailRegex.test(formData.email)) {
            nuevosErrores.email = 'Ingresa un correo electronico valido.';
        }

        if (!formData.telefono.trim()) {
            nuevosErrores.telefono = 'El teléfono de contacto es obligatorio.';
        } else if (formData.telefono.length < 8) {
            nuevosErrores.telefono = 'Ingresá un numero de telefono valido.';
        }

        if (!formData.direccion.trim()) {
            nuevosErrores.direccion = 'La direccion o localidad es obligatoria.';
        }

        return nuevosErrores;
    };

    const submit = (e) => {
        e.preventDefault();

        const erroresValidacion = validar();

        if (Object.keys(erroresValidacion).length > 0) {
            setErrores(erroresValidacion);
            return;
        }

        setDatosConfirmados({ ...formData });
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
        onVaciarCarrito();
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            direccion: '',
            metodoEntrega: 'envio',
            mensaje: ''
        });
        setErrores({});
    };

    return (
        <>
            <Card className="shadow-sm border-0 p-4 bg-white mt-4">
                <h4 className="fw-bold mb-3">Datos para la compra</h4>

                {errores.carrito && (
                    <Alert variant="danger">{errores.carrito}</Alert>
                )}

                <Form onSubmit={submit} noValidate>
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Group controlId="formNombre">
                                <Form.Label className="small fw-bold">Nombre y Apellido *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    placeholder="Ej: Juan Perez"
                                    value={formData.nombre}
                                    onChange={cambio}
                                    isInvalid={!!errores.nombre}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errores.nombre}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="formEmail">
                                <Form.Label className="small fw-bold">Correo Electronico *</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="usuario@ejemplo.com"
                                    value={formData.email}
                                    onChange={cambio}
                                    isInvalid={!!errores.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errores.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        {/* Teléfono */}
                        <Col md={6}>
                            <Form.Group controlId="formTelefono">
                                <Form.Label className="small fw-bold">Telefono *</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="telefono"
                                    placeholder="Ej: 1123456789"
                                    value={formData.telefono}
                                    onChange={cambio}
                                    isInvalid={!!errores.telefono}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errores.telefono}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="formDireccion">
                                <Form.Label className="small fw-bold">Dirección o Localidad *</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="direccion"
                                    placeholder="Ej: Av. Rivadavia 1234, Morón"
                                    value={formData.direccion}
                                    onChange={cambio}
                                    isInvalid={!!errores.direccion}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errores.direccion}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group controlId="formMetodoEntrega">
                                <Form.Label className="small fw-bold">Método de entrega *</Form.Label>
                                <div className="d-flex gap-4">
                                    <Form.Check
                                        type="radio"
                                        id="entrega-envio"
                                        label="Envio a domicilio (Gratis)"
                                        name="metodoEntrega"
                                        value="envio"
                                        checked={formData.metodoEntrega === 'envio'}
                                        onChange={cambio}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="entrega-retiro"
                                        label="Retiro en sucursal"
                                        name="metodoEntrega"
                                        value="retiro"
                                        checked={formData.metodoEntrega === 'retiro'}
                                        onChange={cambio}
                                    />
                                </div>
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group controlId="formMensaje">
                                <Form.Label className="small fw-bold">Mensaje o aclaracion</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="mensaje"
                                    placeholder="Notas adicionales para la entrega, horarios de preferencia, etc."
                                    value={formData.mensaje}
                                    onChange={cambio}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="d-grid mt-4">
                        <Button
                            type="submit"
                            variant="success"
                            size="lg"
                            disabled={carrito.length === 0}
                        >
                            Confirmar pedido ({carrito.reduce((acc, i) => acc + i.cantidad, 0)} productos)
                        </Button>
                    </div>
                </Form>
            </Card>

            <Modal show={showModal} onHide={cerrarModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Compra realizada con éxito!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="py-4">
                    <div className="text-center mb-3">
                        <div className="display-4 text-success mb-2">✓</div>
                        <h5>Gracias por tu compra, {datosConfirmados?.nombre}!</h5>
                    </div>

                    <Alert variant="light" className="border small">
                        <div><strong>Email de contacto:</strong> {datosConfirmados?.email}</div>
                        <div><strong>Telefono:</strong> {datosConfirmados?.telefono}</div>
                        <div><strong>Entrega:</strong> {datosConfirmados?.metodoEntrega === 'envio' ? `Envio a domicilio (${datosConfirmados?.direccion})` : 'Retiro en sucursal'}</div>
                        {datosConfirmados?.mensaje && (
                            <div><strong>Aclaración:</strong> {datosConfirmados.mensaje}</div>
                        )}
                        <hr />
                        <div className="fs-6 fw-bold text-primary">
                            Total pagado: ${totalGeneral.toLocaleString('es-AR')}
                        </div>
                    </Alert>

                    <p className="text-muted small text-center mb-0">
                        Te enviamos el comprobante a tu correo.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={cerrarModal}>
                        Aceptar y finalizar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
