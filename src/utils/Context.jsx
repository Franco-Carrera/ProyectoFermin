import { createContext, useEffect } from "react";
export const Context = createContext();

export const ContextWrapper = ({ children }) => {
  window.addEventListener("scroll", function () {
    document.scrollingElement.style.setProperty(
      "scroll-snap-type",
      "y mandatory"
    );
  });

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
