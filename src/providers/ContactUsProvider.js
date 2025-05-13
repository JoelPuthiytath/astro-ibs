"use client";

import { createContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [showContactUs, setShowContactUs] = useState(true);

  const toggleContactUs = (status) => {
    setShowContactUs(status);
  };

  return (
    <ContactContext.Provider value={{ showContactUs, toggleContactUs }}>
      {children}
    </ContactContext.Provider>
  );
};
