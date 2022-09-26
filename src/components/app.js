import React, { Component } from 'react';
import Header from './Header/header';
import Devices from "./devices";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Moonshot's Guide</h1>
        <h3>By David Castagneto</h3>
        <Header heading="Moonshot Devices"/>
        <Devices heading="Seleccione Dispositivo"/>
      </div>
    );
  }
}