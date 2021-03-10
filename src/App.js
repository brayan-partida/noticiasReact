import "./App.css";
import React, { Fragment, useState } from "react";
import Headers from "./components/Headers";
import Formulario from "./components/Formulario";
import Noticias from "./components/Noticias";
function App() {
  const [noticiasall, guardarNoticias] = useState([]);

  return (
    <Fragment>
      <Headers titulo="Noticias Mexico" />

      <div className="container blue">
        <Formulario guardarNoticias={guardarNoticias} />
      </div>
      <Noticias noticiasall={noticiasall} />
    </Fragment>
  );
}

export default App;
