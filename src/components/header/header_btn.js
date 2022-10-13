import React, { Component } from "react";
import { CopyBtn } from "../buttons/headerButtons";
import { IoCopyOutline } from "react-icons/io5";


const rawButtonDataCopy = [
    {title: "extensiones", className: "buttons wrapperbtn copybtn", id:"copyExt", innerHTML:"Copiar", icon: <IoCopyOutline/>},
    {title: "instpruebas", className: "buttons wrapperbtn copybtn", id:"copyInst", innerHTML:"Copiar", icon: <IoCopyOutline/>}
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
                    <button key={copyBtn.title} className={copyBtn.className} id={copyBtn.id} icon={copyBtn.icon}>
                        <div>
                        {copyBtn.icon}
                        </div>
                        <CopyBtn icon={copyBtn.icon} id={copyBtn.id} className={copyBtn.className} innerHTML={copyBtn.innerHTML}/>
                    </button>
            );
        });
        return (
            <header>
                {copyBtns}
            </header>
        );
    }
}