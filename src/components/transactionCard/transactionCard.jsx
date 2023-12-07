import "./Cardstyle.css";
export const TransaccionCard = ({ transaccion }) => {
  const esIngreso = transaccion.tipoMovimiento === "ingreso";
  console.log(esIngreso);

  const obtenerColor = () => {
    return esIngreso ? "green-square" : "red-circle";
  };
  const obtenerColorTexto = () => {
    return esIngreso ? 'text-success' : 'text-danger';
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-12 offset-sm-1 col-lg-6 offset-lg-3 mb-4">
            <ul className="list-group">
              <li className="d-flex justify-content-between align-items-center bg-white shadow p-3 rounded-3">
                <div className="d-flex align-items-center">
                  <div className={` margin-left-2 ${obtenerColor()}`}></div>
                  <span className="fs-md-6 tipo_letra">{transaccion.motivo}</span>
                </div>
                <span className={`tipo_letra fs-md-6 ${obtenerColorTexto()}`}>{transaccion.cantidad}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
