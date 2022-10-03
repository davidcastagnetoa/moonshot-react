import React, { Component } from "react";
import { CopyBtn } from "../buttons/headerButtons";
import { ToggleBtn } from "../buttons/headerButtons";

const rawButtonDataCopy = [
    {title: "extensiones", className: "buttons wrapperbtn copybtn", id:"copyExt", innerHTML:"Copiar"},
    {title: "instpruebas", className: "buttons wrapperbtn copybtn", id:"copyInst", innerHTML:"Copiar"}
];

export default class Header extends Component {
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