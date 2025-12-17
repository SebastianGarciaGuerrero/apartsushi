import React from 'react';
import { NavigationProvider, useNavigation } from './navigation/NavigationContext.jsx';
import Navbar from './components/Navbar';
import Home from './components/Home';

// Placeholder components for other pages
const PlaceholderPage = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] bg-gray-50">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
    <p className="text-gray-500">Contenido de la sección {title}...</p>
  </div>
);

// Main Content Logic
const MainContent = () => {
  const { activePage } = useNavigation();

  // Simple Router Switch
  switch (activePage) {
    case 'home': return <Home />;
    case 'order': return <PlaceholderPage title="Haz tu Pedido" />;
    case 'menu': return <PlaceholderPage title="Nuestra Carta" />;
    case 'promotions': return <PlaceholderPage title="Promociones" />;
    case 'locations': return <PlaceholderPage title="Locales" />;
    case 'hours': return <PlaceholderPage title="Horarios" />;
    case 'contact': return <PlaceholderPage title="Contacto" />;
    default: return <Home />;
  }
};

const App = () => {
  return (
    <NavigationProvider>
      <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <MainContent />
        </main>

        {/* Simple Footer */}
        <footer className="bg-black text-white py-8 text-center text-sm">
          <p>&copy; 2024 SushiSun. Todos los derechos reservados.</p>
        </footer>
      </div>
    </NavigationProvider>
  );
};

export default App;