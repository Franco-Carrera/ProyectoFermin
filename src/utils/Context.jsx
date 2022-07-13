/*Context para probar el Home.texts.json* Por ahora sin uso */

import { createContext, useEffect, useState } from "react";
export const Context = createContext();

export const ContextWrapper = ({ children }) => {
  // const [language, setLanguage] = useState("es");
  const [offSetY, setOffSetY] = useState(0);

  const handleScroll = () => {
    setOffSetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); //entenderlo //propias reglas
  });

  return (
    <Context.Provider value={{ offSetY, setOffSetY }}>
      {/* <main className="app-container">
      </main> */}
      {children}
    </Context.Provider>
  );
};
