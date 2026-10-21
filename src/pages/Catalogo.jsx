import React from 'react';

export default function Catalogo() {
  return (
    <div className="container my-5">
      <div>
        <h1>Categorías</h1>
        <ul>
          <li>Guitarras</li>
          <li>Baterías</li>
          <li>Bajos</li>
          <li>Otros</li>
        </ul>
        <div id="productos">
          <div>
            <img src="" alt="" />
            <h2>Nombre</h2>
            <p>Precio</p>
            <p>Stock</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}
