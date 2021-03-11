import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import styles from "./formulario.module.css";
import UseSelect from "../hooks/UseSelect";
import useSelect from "../hooks/UseSelect";
import axios from "axios";

function Formulario({ guardarNoticias }) {
  const Opciones = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];
  //opciones---------------------------------------------->
  const [categoria, SelectNoticias] = useSelect("general", Opciones);
  var [categoriaurl, guardarCategoriaurl] = useState("general");
  const buscar_noticias = (e) => {
    e.preventDefault();

    guardarCategoriaurl(categoria);
  }; //ANCHOR buscar noticas============================>

  useEffect(() => {
    const consumirApi = async () => {
      var url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoriaurl}&apiKey=3651958dc83541e5bc2b7dbca15bbaa0`;
      const connection = await axios.get(url);
      console.log(connection.data.articles);
      guardarNoticias(connection.data.articles);  
    };
    consumirApi();
  }, [categoriaurl]);
  //ANCHOR FINISH -------------------------->
  //localhost:3000/
  return (
    <Fragment>
      <div className={`styles.buscador row`}>
        <div className="col s12 m8 offset-m2">
          <form
            onSubmit={
              buscar_noticias
              //ANCHOR
            }
          >
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
