import React, { useState } from "react";
import { products, categories } from "../data/products";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Rolls Especiales Frios"
  );
  const [selectedProduct, setSelectedProduct] = useState(null); // Para el Modal

  // Filtrar productos por categoría
  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="h-48 bg-zinc-900 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-white text-5xl font-serif italic">
          {selectedCategory}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar Categorías */}
        <aside className="w-full md:w-64 space-y-2">
          <h3 className="font-black uppercase text-xs tracking-widest mb-4 border-b pb-2">
            Categorías
          </h3>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left px-2 py-1 text-sm transition-colors ${
                selectedCategory === cat
                  ? "text-red-600 font-bold border-l-2 border-red-600 pl-3"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </aside>

        {/* Grid de Productos */}
        <main className="flex-grow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square overflow-hidden bg-gray-100 border border-gray-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Botón rápido de agregar */}
                  <button className="absolute bottom-0 w-full bg-red-600 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase">
                    + Agregar al carrito
                  </button>
                </div>
                <div className="mt-3">
                  <h4 className="font-black text-sm uppercase tracking-tighter">
                    {product.name}
                  </h4>
                  <p className="text-red-600 font-bold text-lg">
                    ${product.price.toLocaleString("es-CL")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* MODAL DE DETALLE */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white max-w-2xl w-full rounded-lg overflow-hidden relative flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-2xl font-light hover:rotate-90 transition-transform"
            >
              ✕
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img
                src={selectedProduct.image}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-black text-gray-900 uppercase leading-none mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-red-600 text-2xl font-bold mb-4">
                ${selectedProduct.price.toLocaleString("es-CL")}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-red-600 transition-colors">
                Añadir al pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
