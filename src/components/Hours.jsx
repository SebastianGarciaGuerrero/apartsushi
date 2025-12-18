import React from "react";
import { FaWhatsapp, FaUtensils, FaClock } from "react-icons/fa";
import { useNavigation } from "../navigation/NavigationContext";

const Hours = () => {
  const { navigateTo } = useNavigation(); // Usamos tu contexto de navegación

  const schedule = [
    { days: "Lunes a Jueves", time: "12:00 a 21:00hrs", accent: false },
    { days: "Viernes a Sábado", time: "12:30 a 23:00hrs", accent: true }, // Destacado
    { days: "Domingo", time: "12:30 a 16:00hrs", accent: false },
  ];

  return (
    <div className="bg-white min-h-[80vh] flex flex-col items-center">
      {/* Banner de Título */}
      <div className="w-full h-64 bg-[url('https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-serif italic">Horarios</h1>
          <div className="mt-4 flex items-center gap-2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-pulse uppercase tracking-widest">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Abierto ahora
          </div>
        </div>
      </div>

      {/* Contenedor de Horarios */}
      <div className="max-w-4xl w-full px-6 -mt-12 z-10">
        <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 border-t-4 border-red-600">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Info de Horarios */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <FaClock className="text-red-600 text-2xl" />
                <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-800">
                  ¿Cuándo pedir?
                </h2>
              </div>

              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`pb-4 border-b border-gray-100 flex justify-between items-center ${
                      item.accent ? "scale-105 origin-left" : ""
                    }`}
                  >
                    <div>
                      <p
                        className={`text-sm uppercase font-bold ${
                          item.accent ? "text-red-600" : "text-gray-400"
                        }`}
                      >
                        {item.days}
                      </p>
                      <p className="text-xl font-medium text-gray-800">
                        {item.time}
                      </p>
                    </div>
                    {item.accent && (
                      <span className="bg-red-100 text-red-600 text-[10px] font-black px-2 py-1 rounded">
                        MÁS TIEMPO
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Columna de Acción (Marketing) */}
            <div className="bg-gray-50 p-8 rounded-lg flex flex-col items-center text-center space-y-6">
              <h3 className="text-xl font-serif italic text-gray-800">
                ¿Antojo de algo especial?
              </h3>
              <p className="text-gray-500 text-sm">
                No esperes a última hora. Haz tu pedido ahora y recíbelo fresco
                en la puerta de tu casa.
              </p>

              <div className="w-full space-y-4">
                {/* Botón Principal: Al Menú */}
                <button
                  onClick={() => navigateTo("menu")}
                  className="w-full bg-black text-white py-4 px-6 rounded-md font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all transform hover:-translate-y-1 shadow-xl"
                >
                  <FaUtensils /> Ver la Carta
                </button>

                {/* Botón Secundario: WhatsApp */}
                <a
                  href="https://wa.me/569XXXXXXXX" // Reemplaza con tu número real
                  target="_blank"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-md font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-green-700 transition-all transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="text-xl" /> Pedir por WhatsApp
                </a>
              </div>

              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                ¡Te esperamos en Apart Sushi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
