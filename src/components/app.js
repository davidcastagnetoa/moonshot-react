import React, { Component } from 'react';
import Headerbtn from './header/header_btn';
import Footerbtn from './footer/footer_btn';
import Devices from "./devices";
import Header from "./header/header";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Moonshot's Guide</h1>
        <h3>By David Castagneto</h3>
        <Headerbtn heading="Moonshot Devices" />
        <Header/>
        <Devices heading="Seleccione Dispositivo" />
        <Footerbtn heading="Este documento será sometido a continuas modificaciones, se trata de una guía interactiva de apoyo, en ningun caso reemplazará a la guía del Gestor Documental. Para cambios, sugerencias y actualizaciones, por favor contacte con" />
      </div>
    );
  }
}
