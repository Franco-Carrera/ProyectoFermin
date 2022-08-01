import { createContext, useEffect } from "react";
export const DetailContext = createContext();

export const DetailContextWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollBy(0, -window.innerHeight);
  }, []);

  return <DetailContext.Provider value={{}}>{children}</DetailContext.Provider>;
};
