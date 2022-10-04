import React from 'react';
import Logo from '../../assets/securitasdirectlogo.png';

const Header = () => {
  return (
        <header className="head-wrapper">
            <div className="logo">
                <div className={Logo}></div>
            </div>
            <div className="right-head-wrapper">
                <div className="addinfo">
                    <div className="instpruebas">
                        <p>INSTALACION DE PRUEBAS:
                        <p id="inst">1938437</p>
                        </p>
                        <button className="buttons wrapperbtn copybtn" id="copy_btn" onclick="copyToClickBoard('inst')"
                            title="Pulsa para copiar">
                            <div id="copy_btn" className="far fa-copy"></div>
                            <p>Copiar</p>
                        </button>
                    </div>
                    <div className="extensiones">
                        <p>EXTENSION MOONSHOT:
                        <p id="ext">66596</p>
                        </p>
                        <button className="buttons wrapperbtn copybtn" id="copy_btn" onclick="copyToClickBoard('ext')"
                            title="Pulsa para copiar">
                            <div id="copy_btn" className="far fa-copy"></div>
                            <p>Copiar</p>
                        </button>
                    </div>
                </div>
                <div className="toogle_day-night">
                    <button className="buttons wrapperbtn day-night" id="tgl" title="Cambiar Colores">
                        <div id="tgl" className="fas fa-adjust"></div>
                    </button>
                </div>
            </div>
        </header>
  )
}

export default Header