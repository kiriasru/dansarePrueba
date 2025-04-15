import { productos } from './productos.js';

export function renderizarProductos(contenedorSelector) {
    const contenedor = document.querySelector(contenedorSelector);
  
    if (!contenedor) return console.warn(`Contenedor "${contenedorSelector}" no encontrado`);
  
    productos.forEach(producto => {
      const box = document.createElement('div');
      box.classList.add('box');
  
      box.innerHTML = `
        <span class="category">${producto.categoria}</span>
        <div class="image">
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <div class="icons">
                <a href="#" class="cart-btn">Agregar al carrito</a>
            </div>
        </div>
        <div class="content">
            <h3>${producto.titulo}</h3>
            <div class="price"><span class="currency">L</span>${producto.precio.toFixed(2)}</div>
        </div>
      `;
  
      contenedor.appendChild(box);
    });
}