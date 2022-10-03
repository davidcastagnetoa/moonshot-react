import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Devices from "./devices";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Moonshot's Guide</h1>
        <h3>By David Castagneto</h3>
        <Header heading="Moonshot Devices"/>
        <Devices heading="Seleccione Dispositivo"/>
        <Footer heading="Este documento será sometido a continuas modificaciones, se trata de una guía interactiva de apoyo, en ningun caso reemplazará a la guía del Gestor Documental. Para cambios, sugerencias y actualizaciones, por favor contacte con"/>
      </div>
    );
  }
}