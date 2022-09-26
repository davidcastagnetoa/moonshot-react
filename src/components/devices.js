import React, { Component } from "react";
import { LinkBtn } from "./buttons/linksButtons";

const rawButtonDataLink = [
    {title: "Croptex", class: "buttons devicesbtn ypimg", id:"optex", innerHTML:"CROPTEX"},
    {title: "Smartshock", class: "buttons devicesbtn mgimg", id:"shock", innerHTML:"SMARTSHOCK"},
    {title: "Arlo", class: "buttons devicesbtn arloimg", id:"arlo", innerHTML:"ARLO"},
    {title: "Campir", class: "buttons devicesbtn yrimg", id:"campir", innerHTML:"CAMPIR"},
    {title: "SVK", class: "buttons devicesbtn svkimg", id:"key", innerHTML:"SVK"},
    {title: "Orion", class: "buttons devicesbtn orionimg", id:"orion", innerHTML:"ORION"},
    {title: "Cam6430", class: "buttons devicesbtn smgextimg", id:"camext", innerHTML:"CAM 6430"},
    {title: "OwaApp", class: "buttons devicesbtn owaimg", id:"owaapp", innerHTML:"OWA APP"},
    {title: "Keyfog", class: "buttons devicesbtn keyimg", id:"keyfog", innerHTML:"KEYFOG"},
    {title: "Cam6415", class: "buttons devicesbtn n1img", id:"camint", innerHTML:"CAM 6415"},
    {title: "Central", class: "buttons devicesbtn centimg", id:"cent", innerHTML:"CENTRAL"},
    {title: "VerisurePortal", class: "buttons devicesbtn vpimg", id:"vp", innerHTML:"VERISURE PORTAL"},
    {title: "SmokeSensor", class: "buttons devicesbtn smokeimg", id:"smoke", innerHTML:"SMOKE SENSOR"},
    {title: "WaterSensor", class: "buttons devicesbtn waterimg", id:"water", innerHTML:"WATER SENSOR"},
    {title: "Zerovision", class: "buttons devicesbtn zvimg", id:"zv", innerHTML:"ZEROVISION"},
    {title: "Sentinel", class: "buttons devicesbtn jzimg", id:"jz", innerHTML:"SENTINEL"},
    {title: "BotonSOS", class: "buttons devicesbtn abtnimg", id:"sosbtn", innerHTML:"BOTON SOS"}
];

export default class Devices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonData: rawButtonDataLink,
            isEnable: true
        };
    }

    render() {
        const linkBtns = this.state.buttonData.map(linkBtn => {
            return(
                    <button key={linkBtn.title} className={linkBtn.class}>
                        <LinkBtn 
                        id={linkBtn.id} 
                        className={linkBtn.class}
                        innerHTML={linkBtn.innerHTML}/>
                    </button>
            );
        });

        return (
            <div>
                <p>{this.props.heading}</p>
                {linkBtns}
            </div>
        );
    }
}