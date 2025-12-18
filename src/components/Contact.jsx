import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Banner Principal */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1000')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className="relative z-10 text-white text-6xl font-serif italic">
          Contacto
        </h1>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna Izquierda: Textos */}
        <div className="space-y-12">
          {/* Sección Trabajo */}
          <section>
            <h2 className="text-3xl font-bold italic text-gray-800 leading-tight">
              ¿Quieres ponerte en contacto <br />
              <span className="text-red-600 not-italic uppercase text-4xl font-black">
                con nosotros?
              </span>
            </h2>
            <div className="mt-4 border-l-4 border-red-600 pl-4">
              <p className="text-gray-600 text-lg uppercase tracking-wide">
                Postula para ser parte de este gran equipo APART SUSHI®
              </p>
            </div>
          </section>

          {/* Sección Franquicia */}
          <section>
            <h2 className="text-3xl font-bold italic text-gray-800 leading-tight">
              ¿Quieres iniciar <br />
              <span className="text-red-600 not-italic uppercase text-4xl font-black">
                una franquicia?
              </span>
            </h2>
            <div className="mt-4 border-l-4 border-red-600 pl-4">
              <p className="text-gray-500 leading-relaxed text-sm">
                En APART SUSHI®, nos enorgullece ofrecer una oportunidad de
                franquicia de alta calidad y rentabilidad. Intentamos
                proporcionar a nuestros franquiciados las herramientas y el
                conocimiento necesarios para dirigir un negocio con éxito y
                animar a los propietarios a aprender las habilidades que les
                permitirán trabajar y poseer varios restaurantes a la vez.
              </p>
            </div>
          </section>
        </div>

        {/* Columna Derecha: Formulario */}
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              NOMBRE*
            </label>
            <input
              type="text"
              name="nombre"
              className="w-full border border-gray-200 p-3 focus:outline-none focus:border-red-600 transition"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              E-MAIL*
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-200 p-3 focus:outline-none focus:border-red-600 transition"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              TELÉFONO*
            </label>
            <input
              type="tel"
              name="telefono"
              className="w-full border border-gray-200 p-3 focus:outline-none focus:border-red-600 transition"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              MENSAJE
            </label>
            <textarea
              name="mensaje"
              rows="8"
              className="w-full border border-gray-200 p-3 focus:outline-none focus:border-red-600 transition resize-none"
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 ease-in-out hover:bg-black hover:shadow-lg active:scale-95"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
