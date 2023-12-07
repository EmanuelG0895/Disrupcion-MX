import { useTransaccion } from "@/context/GlobalState";
import "./styleBalance.css";

export default function Balance() {
  const { transacciones } = useTransaccion();
  const esIngreso = transacciones.tipoMovimiento === "ingreso";

  const calculoBalance = transacciones.reduce(
    (acc, item) => {
      let ingreso = 0;
      let gasto = 0;

      if (item.tipoMovimiento === "ingreso") {
        ingreso += parseFloat(item.cantidad);
      } else {
        gasto += parseFloat(item.cantidad);
      }

      return {
        total: acc.total + parseFloat(item.cantidad),
        ingresos: acc.ingresos + ingreso,
        gastos: acc.gastos + gasto,
      };
    },
    {
      total: 0,
      ingresos: 0,
      gastos: 0,
    }
  );

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-10 col-12 offset-sm-1 col-lg-6 offset-lg-3">
          <div className="card bg-light shadow-lg mt-5">
            <div className="card-body">
              <h3 className="card-title text-center fs-md-6">
                Balance del mes
              </h3>
              <h1 className="  fs-md-6 text-bold card-text text-center text-primary">
                ${calculoBalance.total}
              </h1>
              <div className="row text-bold ">
                <div className="col-6 text-center vertical-line ">
                  <p className="card-text text-success fs-3  fs-md-6 ">
                    Ingresos
                  </p>
                  <p className="card-text text-success fs-3  fs-md-6">
                    ${calculoBalance.ingresos}
                  </p>
                </div>
                <div className="col-6 text-center ">
                  <p className="card-text text-danger fs-3">Gastos</p>
                  <p className="card-text text-danger fs-3 ">
                    ${calculoBalance.gastos}
                  </p>
                </div>
              </div>
              <p className="card-link text-secondary d-block text-center mt-3">
                Ver analíticas
                <br />
                <span className="arrow">&#9660;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
