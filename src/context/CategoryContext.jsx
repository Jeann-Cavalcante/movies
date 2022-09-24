import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState("movie");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
