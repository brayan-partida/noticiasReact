import React, { Fragment } from "react";
import styled from "@emotion/styled";
import styles from "./formulario.module.css";
import UseSelect from "../hooks/UseSelect";
import useSelect from "../hooks/UseSelect";
const inputext = styled.text``;

function Formulario() {
  const [categoria, SelectNoticias] = useSelect();
  return (
    <Fragment>
      <div className={`styles.buscador row`}>
        <div className="col s12 m8 offset-m2">
          <form>
            <h2 className={styles.heading}>Noticias por categoria de Mexico</h2>

            <div className="input-field col s6">
              <button
                className={`btn waves-effect waves-light styles.btn-block`}
                type="submit"
                name="action"
              >
                Buscar
              </button>
            </div>
            <div className="input-field col s6">
              <SelectNoticias />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
    //ANCHOR se termina el fragment
  );
}

export default Formulario;
