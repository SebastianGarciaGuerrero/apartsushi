import React from "react";
import { FaInstagram, FaWhatsapp, FaChevronUp } from "react-icons/fa"; // Necesitas instalar react-icons

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Columna 1: Logo y RRSS Principales */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <img
            src="/logoapart.png"
            alt="Apart Sushi Logo"
            className="w-40 transform -rotate-12"
          />
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/apartsushi"
              target="_blank"
              className="text-3xl hover:text-pink-500 transition-colors"
              title="Síguenos en Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=56940498264&text&type=phone_number&app_absent=0"
              target="_blank"
              className="text-3xl hover:text-green-500 transition-colors"
              title="Pide por WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Columna 2: Locales */}
        <div className="space-y-4">
          <h3 className="font-black text-sm tracking-widest uppercase">
            Locales
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Villa Alemana</li>
            <li className="italic text-gray-600">Pronto en Valparaíso</li>
          </ul>
        </div>

        {/* Columna 3: Apart Sushi (Enlaces) */}
        <div className="space-y-4">
          <h3 className="font-black text-sm tracking-widest uppercase">
            Apart Sushi
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm uppercase font-medium">
            <li className="hover:text-white cursor-pointer transition">
              Contacto
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Trabaja con nosotros
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Franquicia
            </li>
          </ul>
        </div>

        {/* Columna 4: Perfil */}
        <div className="space-y-4">
          <h3 className="font-black text-sm tracking-widest uppercase">
            Perfil de Usuario
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm uppercase font-medium">
            <li className="hover:text-white cursor-pointer transition">
              Mi Cuenta
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Registrarse
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Mis Pedidos
            </li>
            <li className="hover:text-white cursor-pointer transition text-red-600">
              Mi Carrito
            </li>
          </ul>
        </div>
      </div>

      {/* Botón Volver Arriba */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-24 md:right-20 bg-zinc-800 p-3 hover:bg-zinc-700 transition"
      >
        <FaChevronUp className="text-white" />
      </button>

      {/* Copyright y Créditos */}
      <div className="border-t border-zinc-900 pt-8 text-center text-[10px] tracking-widest text-gray-500 uppercase">
        <p>
          © Apart Sushi 2024 - Desarrollado por{" "}
          <a
            href="https://sebastiangarcia.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline decoration-red-600 underline-offset-4"
          >
            sebastiangarcia.cl
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
