import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("movie");

  return (
    <CategoryContext.Provider value={{ categoria, setCategoria }}>
      {children}
    </CategoryContext.Provider>
  );
};
