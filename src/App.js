import "./App.css";
import React, { Fragment } from "react";
import Headers from "./components/Headers";
import Formulario from "./components/Formulario";
function App() {
  return (
    <Fragment>
      <Headers titulo="Noticias Mexico" />

      <div className="container blue">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
