import React, { useState, Fragment, useEffect } from "react";
import styles from "./noticias.module.css";
const Noticias = ({ noticiasall }) => {
  //if (noticias === "") return null;
  const { urlToImage, url, description, title } = noticiasall;

  return (
    <Fragment>
      <div className="row">
        {noticiasall.map((noticia) => (
          <Fragment>
            <div className={`col s12 m6 l4 styles.noticias_image`}>
              <div className="card">
                <div className={`card-image styles.noticias_image`}>
                  <img
                    src={noticia.urlToImage}
                    className={styles.imagen_noticia} 
                  />
                </div>
                <div className="card-content">
                  <h5>{noticia.title}</h5>
                  <p key={noticia.url}>{noticia.description}</p>
                </div>

                <div className="card-action">
                  <a
                    className="waves-effect waves-light btn-small"
                    href={noticia.url}
                  >
                    ir ala noticia
                  </a>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default Noticias;
