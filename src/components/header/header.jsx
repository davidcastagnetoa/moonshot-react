import React from "react";
import Headerbtn from './header_btn';
// import './Header.css';

export const Header = () => {
  return (
    // <header className="head-wrapper">
    //   <div className="logo">
    //     <div className="imgsd"></div>
    //   </div>
    //   <div className="right-head-wrapper">
    //     <div className="addinfo">
    //       <div className="instpruebas">
    //         <p>
    //           INSTALACION DE PRUEBAS:
    //           <p id="inst">1938437</p>
    //         </p>
    //         <Headerbtn/>
    //       </div>
    //       <div className="extensiones">
    //         <p>
    //           EXTENSION MOONSHOT:
    //           <p id="ext">66596</p>
    //         </p>
    //         <button
    //           className="buttons wrapperbtn copybtn"
    //           id="copy_btn"
    //           onClick="copyToClickBoard('ext')"
    //           title="Pulsa para copiar"
    //         >
    //           <div id="copy_btn" className="far fa-copy"></div>
    //           <p>Copiar</p>
    //         </button>
    //       </div>
    //     </div>
    //     <div className="toogle_day-night">
    //       <button
    //         className="buttons wrapperbtn day-night"
    //         id="tgl"
    //         title="Cambiar Colores"
    //       >
    //         <div id="tgl" className="fas fa-adjust"></div>
    //       </button>
    //     </div>
    //   </div>
    // </header>
    <Headerbtn/>
  );
};

export default Header;
