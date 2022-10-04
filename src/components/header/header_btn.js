import React, { Component } from "react";
import { CopyBtn } from "../buttons/headerButtons";
import '../header/header.css';

// function copyToClickBoard(id_elemento) {
//     let aux = document.createElement("input");
//     aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
//     document.body.appendChild(aux);
//     aux.select();
//     document.execCommand("copy");
//     document.body.removeChild(aux);
//   }

const rawButtonDataCopy = [
    {title: "extensiones", className: "buttons wrapperbtn copybtn", id:"copyExt", innerHTML:"Copiar"},
    {title: "instpruebas", className: "buttons wrapperbtn copybtn", id:"copyInst", innerHTML:"Copiar"}
];

export default class Headerbtn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonData: rawButtonDataCopy,
            isEnable: true
        };
    }

    render() {
        const copyBtns = this.state.buttonData.map(copyBtn => {
            return(
                    <button key={copyBtn.title} className={copyBtn.className} id={copyBtn.id}>
                        <CopyBtn 
                        id={copyBtn.id} 
                        className={copyBtn.className}
                        innerHTML={copyBtn.innerHTML}/>
                    </button>
            );
        });

        return (
            <header>
                <p>{this.props.heading}</p>
                {copyBtns}
            </header>
        );
    }
}