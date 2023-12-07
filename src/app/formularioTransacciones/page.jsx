"use client";
import React, { useState, useContext } from "react";
import { transaccionContext } from "@/context/GlobalState";
import { useRouter } from "next/navigation";
import "./style.form.css";
import Link from "next/link";

export default function Movimientos() {
  const router = useRouter();
  const { crearMovimiento } = useContext(transaccionContext);
  const [cantidad, setCantidad] = useState(0);
  const [motivo, setMotivo] = useState("");
  const [tipoMovimiento, setTipoMovimiento] = useState("ingreso");

  const enviarDatos = (e) => {
    e.preventDefault();
    const cantidadStr = cantidad.toString().trim();
    if (
      cantidadStr === "" ||
      tipoMovimiento === "" ||
      motivo.trim() === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const monto = tipoMovimiento === "ingreso" ? cantidad : -cantidad;
    crearMovimiento(monto, tipoMovimiento, motivo);
    router.push("./");
  };

  return (
    <div className="form-container">
      <form onSubmit={enviarDatos} className="container mt-5 form-content">
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">
              Monto
              <input
                placeholder="200"
                type="number"
                name="cantidad"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="col-md-6">
            <label className="form-label">
              Tipo de Movimiento
              <select
                className="form-select"
                value={tipoMovimiento}
                onChange={(e) => setTipoMovimiento(e.target.value)}
              >
                <option value="ingreso">Ingreso</option>
                <option value="gasto">Gasto</option>
              </select>
            </label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="form-label">
              Motivo
              <textarea
                placeholder="Netflix"
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                className="form-control"
                rows="5"
              />
            </label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 d-flex justify-content-between">
            <button className="btn btn-lg btn-primary" type="submit">
              Agregar Movimiento
            </button>
            <Link href={"/"}>
              <button
                className="btn btn-danger"
                onClick={() => console.log("Salir")}
              >
                Salir
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
