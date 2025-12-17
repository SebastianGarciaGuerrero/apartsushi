import React, { createContext, useState, useContext } from "react";

// Create Context
const NavigationContext = createContext();

// Provider Component
export const NavigationProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0); // Scroll to top on navigation
  };

  return (
    <NavigationContext.Provider value={{ activePage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom Hook for easy access
export const useNavigation = () => useContext(NavigationContext);
