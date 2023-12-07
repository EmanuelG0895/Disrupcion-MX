"use client";
import { createContext, useContext} from "react";
import { v4 as id } from "uuid";
import { useLocalStorage } from "@/hooks/useLocalstorage";

export const transaccionContext = createContext();

export const useTransaccion = () => {
  const context = useContext(transaccionContext);
  if (!context) throw new Error("deberia ser usado dentro de un Provider");
  return context;
};

export const GlobalProvider = ({ children }) => {
  
   const [transacciones, setTransacciones]=useLocalStorage('transacciones',[])

  const crearMovimiento = (cantidad, tipoMovimiento, motivo) =>
    setTransacciones([
      ...transacciones,
      { cantidad, tipoMovimiento, motivo, id: id() },
    ]);
  return (
    <transaccionContext.Provider value={{ transacciones, crearMovimiento }}>
      {children}
    </transaccionContext.Provider>
  );
};
