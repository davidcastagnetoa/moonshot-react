import React, { Component } from "react";
import { FooterBtn } from "../buttons/footerButtons";

const rawButtonFooter = [
    {title: "guiaProtom", className: "buttons wrapperbtn protom_guide", id:"protom", innerHTML:"GUIA PROTOM"},
    {title: "guiaDCR", className: "buttons wrapperbtn dcr_guide", id:"protom", innerHTML:"GUIA DCR"},
    {title: "home", className: "buttons wrapperbtn homebtn", id:"home", innerHTML:"HOME"}
];

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonData: rawButtonFooter,
            isEnable: true
        };
    }

    render() {
        const footerBtns = this.state.buttonData.map(footerBtn => {
            return(
                    <button key={footerBtn.title} className={footerBtn.className} id={footerBtn.id}>
                        <FooterBtn 
                        id={footerBtn.id} 
                        className={footerBtn.className}
                        innerHTML={footerBtn.innerHTML}/>
                    </button>
            );
        });

        return (
            <footer>
                <p>{this.props.heading}</p>
                {footerBtns}
            </footer>
        );
    }
}