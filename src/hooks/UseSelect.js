import React, { Fragment, useState } from "react";

const useSelect = (stateInicial, opciones) => {
  const [state, actualizarState] = useState(stateInicial);

  
  const selectNoticias = () => (
    <Fragment>
      <select
        className="browser-default"
        value={state}
        onChange={(e) => actualizarState(e.target.value)}
      >
        {
          opciones.map((opciones) => (
            <option key={opciones.value} value={opciones.value}>{opciones.label}</option>
          ))
          //ANCHOR  terminacion del map
        }
      </select>
    </Fragment>
  );

  return [state, selectNoticias];
};

export default useSelect;
