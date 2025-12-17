import { useNavigation } from "../navigation/NavigationContext";
import { Search, User, ShoppingCart, Menu as MenuIcon } from "lucide-react";

const Navbar = () => {
  const { navigate, activePage } = useNavigation();

  // Helper to determine active link styling
  const getLinkClass = (page) => {
    const baseClass =
      "text-xs font-bold uppercase tracking-wide cursor-pointer hover:text-red-600 transition-colors";
    return activePage === page
      ? `${baseClass} text-red-600`
      : `${baseClass} text-gray-800`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100 h-20 flex items-center justify-between px-4 md:px-8">
      {/* Left: Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("home")}
      >
        <div className="flex items-center gap-1">
          {/* Simple CSS Logo representation */}
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
            <div className="w-full h-1 bg-white/20"></div>
          </div>
          <span className="text-2xl font-black text-red-600 tracking-tighter">
            Apart Sushi
          </span>
        </div>
      </div>

      {/* Center: Navigation Links (Hidden on mobile, visible on lg) */}
      <div className="hidden lg:flex gap-8 items-center">
        <button
          onClick={() => navigate("order")}
          className={getLinkClass("order")}
        >
          Haz tu pedido
        </button>
        <button
          onClick={() => navigate("menu")}
          className={getLinkClass("menu")}
        >
          Carta
        </button>
        <button
          onClick={() => navigate("promotions")}
          className={getLinkClass("promotions")}
        >
          Promociones
        </button>
        <button
          onClick={() => navigate("locations")}
          className={getLinkClass("locations")}
        >
          Locales
        </button>
        <button
          onClick={() => navigate("hours")}
          className={getLinkClass("hours")}
        >
          Horarios
        </button>
        <button
          onClick={() => navigate("contact")}
          className={getLinkClass("contact")}
        >
          Contacto
        </button>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-5 text-gray-700">
        <Search className="w-5 h-5 cursor-pointer hover:text-red-600" />
        <User className="w-5 h-5 cursor-pointer hover:text-red-600" />
        <div className="relative cursor-pointer hover:text-red-600 group">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
        <MenuIcon className="w-6 h-6 cursor-pointer lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
