import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

export default function Inicio() {
    return (
        <>
            <header>
                <nav id="navbar">
                    <div id="navbar-titulo">
                        <div>
                            <img id="navbar-logo" src="/imagenes/icono.svg" alt="Logo" />
                        </div>
                        <div id="navbar-titulo-texto">
                            <p className="stick-no-bills">pendiente</p>
                        </div>
                    </div>
                    <div id="navbar-contenedor">
                        <ul id="navbar-links">
                            <li> {/* esto no renderiza, ni idea porque */}
                                <Link to="/" className="link"><i className="bi bi-house"></i></Link>
                            </li>
                            <li>
                                <Link to="/catalogo" className="link"><i className="bi bi-list"></i></Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="link"><i className="bi bi-envelope"></i></Link>
                            </li>
                            <li>
                                <Link to="/carrito" className="link">
                                    <i className="bi bi-cart"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main id="contenido-pagina">
                <section id="banner">
                    <div id="banner-contenedor" className="flex-column">
                        <div id="banner-contenedor-texto" className="flex-column">
                            <h1 id="banner-titulo" className="banner-texto dm-sans-800">
                                titulo
                            </h1>
                            <h2 id="banner-subtitulo" className="banner-texto dm-sans-400">
                                texto
                            </h2>
                        </div>
                        <div id="banner-flecha-contenedor">
                            <img id="banner-flecha" src="/imagenes/flecha.svg" alt="Flecha hacia abajo" />
                        </div>
                    </div>
                </section>
                <section id="descripcion">
                    <div id="descripcion-contenedor">
                        <p id="descripcion-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        <button>Ver productos</button>
                    </div>
                </section>
            </main>
        </>
    );
}