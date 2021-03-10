import React, { Fragment, useState } from "react";

const useSelect = (stateInicial, opciones) => {
  const [state, actualizarState] = useState("");
  const selectNoticias = () => (
    <Fragment>
      <select className="browser-default">
        <option value="">seleccione un elemento</option>
      </select>
    </Fragment>
  );

  return [state,selectNoticias]
};

export default useSelect;
