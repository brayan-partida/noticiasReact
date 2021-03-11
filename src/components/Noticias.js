import React, { useState, Fragment, useEffect } from "react";
import styles from "./noticias.module.css";
import nextId from "react-id-generator";
const Noticias = ({ noticiasall }) => {
  //if (noticias === "") return null;
  const { urlToImage, url, description, title } = noticiasall;
  var htmlId = nextId();
  var htmlId2 = nextId();
  var htmlId3 = nextId();
  var htmlId4 = nextId();
  var htmlId5 = nextId();
  var htmlId6 = nextId();

  return (
    <Fragment>
      <div className="row">
        {noticiasall.map((noticia) => (
          <Fragment>
            <div key={htmlId} className={`col s12 m6 l4 styles.noticias_image`}>
              <div key={htmlId2} className="card">
                <div
                  key={htmlId3}
                  className={`card-image styles.noticias_image`}
                >
                  <img
                    key={noticia.url}
                    src={noticia.urlToImage}
                    className={styles.imagen_noticia}
                  />
                </div>
                <div key={htmlId4} className="card-content">
                  <h5>{noticia.title}</h5>
                  <p key={noticia.url}>{noticia.description}</p>
                </div>

                <div key={htmlId5} className="card-action">
                  <a
                    key={htmlId6}
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
/**<div className="row">
        {noticiasall.map((noticia) => (
          <Fragment>
            <div className={`col s12 m6 l4 styles.noticias_image`}>
              <div className="card">
                <div className={`card-image styles.noticias_image`} >
                  <img
                  key={noticia.urlToImage}
                    src={noticia.urlToImage}
                    className={styles.imagen_noticia} 
                  />
                </div>
                <div className="card-content">
                  <h5>{noticia.title}</h5>
                  <p key={noticia.url}>{noticia.description}</p>
                </div>

                <div key={noticia.url} className="card-action">
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
      </div> */
