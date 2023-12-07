"use client";
import { useContext } from "react";
import { transaccionContext } from "@/context/GlobalState";
import { TransaccionCard } from "@/components/transactionCard/transactionCard"
import styles from"./page.module.css";
import Link from "next/link";
import Balance from "@/components/balance/balance";
import Header from "@/components/header/header";

export default function Home() {

  const { transacciones } = useContext(transaccionContext);
  return (
    <>
      <Header />
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div>
          <Balance />
          {transacciones.map((transaccion, i) => (
            <TransaccionCard transaccion={transaccion} key={i} />
          ))}
        </div>
        <div className="fixed-bottom d-flex justify-content-center">
          <Link href={"./formularioTransacciones"}>
            <button className={`col-12 col-md-12 mb-4 ${styles.button_color}`} >Agregar Movimiento</button>
          </Link>
        </div>
      </div>
    </>
  );
}


