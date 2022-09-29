import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("movie");
  const [id, setId] = useState(null);

  return (
    <CategoryContext.Provider value={{ categoria, setCategoria, id, setId }}>
      {children}
    </CategoryContext.Provider>
  );
};
