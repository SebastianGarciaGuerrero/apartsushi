import React from 'react';
import { NavigationProvider, useNavigation } from './navigation/NavigationContext.jsx';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Locales from './components/Locales';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Hours from './components/Hours';
import Promociones from './components/Promociones';

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
    case 'menu': return <Menu />;
    case 'promotions': return <Promociones />;
    case 'locations': return <Locales />;
    case 'hours': return <Hours />;
    case 'contact': return <Contact />;
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
        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default App;