import React, { useState } from "react";
import { useNavigation } from "../navigation/NavigationContext";
import { Search, User, ShoppingCart, Menu as MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const { navigate, activePage } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Definimos los items aquí para usarlos tanto en desktop como en mobile
  const NAV_ITEMS = [
    { id: "order", label: "Haz tu pedido" },
    { id: "menu", label: "Carta" },
    { id: "promotions", label: "Promociones" },
    { id: "locations", label: "Locales" },
    { id: "hours", label: "Horarios" },
    { id: "contact", label: "Contacto" },
  ];

  // Función auxiliar para estilos de enlaces
  const getLinkClass = (page, isMobile = false) => {
    const baseClass =
      "text-xs font-bold uppercase tracking-wide cursor-pointer transition-colors";
    const mobileClass = isMobile
      ? "block w-full py-4 text-center border-b border-gray-50 hover:bg-gray-50"
      : "hover:text-red-600";

    // Color activo vs inactivo
    const colorClass = activePage === page ? "text-red-600" : "text-gray-800";

    return `${baseClass} ${mobileClass} ${colorClass}`;
  };

  // Función para navegar y cerrar el menú móvil al mismo tiempo
  const handleMobileClick = (page) => {
    navigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 h-20">
      <div className="flex items-center justify-between px-4 md:px-8 h-full">
        {/* Left: Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("home")}
        >
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
              <div className="w-full h-1 bg-white/20"></div>
            </div>
            <span className="text-2xl font-black text-red-600 tracking-tighter">
              Apart Sushi
            </span>
          </div>
        </div>

        {/* Center: Navigation Links (DESKTOP) */}
        <div className="hidden lg:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={getLinkClass(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: Icons & Mobile Toggle */}
        <div className="flex items-center gap-5 text-gray-700">
          <Search className="w-5 h-5 cursor-pointer hover:text-red-600" />
          <User className="w-5 h-5 cursor-pointer hover:text-red-600" />

          <div className="relative cursor-pointer hover:text-red-600 group">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* Botón Hamburguesa / Cerrar (Visible solo en móvil) */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800 hover:text-red-600" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-800 hover:text-red-600" />
            )}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {/* Se renderiza fuera del contenedor flex principal pero dentro del nav */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col lg:hidden animate-fade-in-down">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMobileClick(item.id)}
              className={getLinkClass(item.id, true)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
