import React from 'react';

const Locales = () => {
  const sucursales = [
    {
      nombre: "VILLA ALEMANA",
      telefonos: "2127783 | 3187280",
      email: "@apartsushi",
      direccion: "Almirante Latorre #309, Villa Alemana.",
      imgLocal: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      imgMapa: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Google_Maps_icon_%282020%29.png" // Reemplazar con iframe o imagen de mapa real
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Superior */}
      <div 
        className="relative h-72 bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1200')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-white text-6xl font-serif italic mb-2">Nuestros locales</h1>
        <p className="relative z-10 text-white text-lg font-light tracking-wide">Encuentra tu Apart Sushi más cercano</p>
      </div>

      {/* Lista de Sucursales */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {sucursales.map((local, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            {/* Columna 1: Información */}
            <div className="flex flex-col space-y-4">
              <header>
                <h3 className="text-3xl font-serif italic text-gray-800 -mb-2">Sucursal</h3>
                <h2 className="text-5xl font-black text-red-600 uppercase tracking-tighter leading-tight">
                  {local.nombre}
                </h2>
              </header>

              <div className="border-l-4 border-red-600 pl-4 space-y-1 py-2">
                <p className="text-gray-600 text-sm font-medium">{local.telefonos}</p>
                <p className="text-gray-600 text-sm font-medium">{local.email}</p>
                <p className="text-gray-400 text-sm">{local.direccion}</p>
              </div>

              <a
                href="#"
                className="text-3xl font-serif italic text-gray-800 hover:text-red-600 transition-colors w-fit pt-4"
              >
                Comprar aquí
              </a>
            </div>

            {/* Columna 2: Foto del Local */}
            <div className="h-64 overflow-hidden shadow-md">
              <img
                src={local.imgLocal}
                alt={`Local ${local.nombre}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Columna 3: Mapa */}
            <div className="h-64 bg-gray-100 shadow-md">
              {/* Aquí puedes integrar un iframe de Google Maps */}
              <div className="w-full h-full flex items-center justify-center bg-blue-50 relative">
                <span className="text-xs text-gray-400 absolute top-2 left-2 uppercase font-bold tracking-widest">Google Maps</span>
                <img
                  src="https://www.mapas-del-mundo.com/img/google-maps.jpg"
                  alt="Mapa"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bg-white px-4 py-1 rounded-full shadow-lg border border-red-500 text-xs font-bold text-red-600">
                  📍 {local.nombre}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Locales;