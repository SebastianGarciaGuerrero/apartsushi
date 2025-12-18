import React from "react";
import { promos } from "../data/promos";
import { ShoppingCart, Tag } from "lucide-react";

const Promociones = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section Promos */}
      <div className="bg-red-600 py-16 px-4 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter italic">
          Promos <span className="text-black">Apart</span>
        </h1>
        <p className="text-white/90 mt-4 font-bold tracking-widest text-sm uppercase">
          La mejor calidad al mejor precio de la zona
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col"
            >
              {/* Imagen y Badge */}
              <div className="relative h-64">
                <img
                  src={promo.image}
                  alt={promo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Tag size={12} /> {promo.tag}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                    {promo.subtitle}
                  </h3>
                  <h2 className="text-2xl font-black text-gray-900 leading-tight uppercase">
                    {promo.name}
                  </h2>
                </div>

                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  {promo.description}
                </p>

                {/* Precios */}
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-black text-gray-900">
                    ${promo.price.toLocaleString("es-CL")}
                  </span>
                  <span className="text-lg text-gray-400 line-through font-bold mb-1">
                    ${promo.originalPrice.toLocaleString("es-CL")}
                  </span>
                </div>

                {/* Botón de Acción */}
                <button
                  className="w-full bg-black hover:bg-red-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
                  onClick={() => alert(`Añadido: ${promo.name}`)} // Aquí irá tu lógica de carrito
                >
                  <ShoppingCart size={18} />
                  Añadir al Pedido
                </button>
              </div>
            </div>
          ))}

          {/* Card de "Próximamente" - Estrategia de Expectativa */}
          <div className="bg-white/50 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 text-center min-h-[500px]">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔥</span>
            </div>
            <h3 className="font-black text-gray-400 uppercase italic text-xl">
              Nuevas Promos
            </h3>
            <p className="text-gray-400 text-sm mt-2 font-medium">
              Estamos cocinando algo nuevo. <br />
              ¡Vuelve pronto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
