import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    console.log("Contexto não encontrado");
  }

  return context;
};
