import React, { Component } from "react";
// Links Icons
import { LinkBtn } from "./buttons/linksButtons";
import { FaCameraRetro, FaMagnet, FaHandHoldingWater } from "react-icons/fa";
import { GiRadarSweep, GiCctvCamera, GiSmartphone, GiRadioTower, GiTablet, GiFireExtinguisher, GiSmokeBomb } from "react-icons/gi";
import { GoRadioTower } from "react-icons/go";
import { ImWarning } from "react-icons/im";
import { MdCameraRear } from "react-icons/md";
import { RiKeyboardLine, RiRemoteControlFill} from "react-icons/ri";
import { SiArlo } from "react-icons/si";

const rawButtonDataLink = [
    {title: "Croptex", class: "buttons devicesbtn ypimg", id:"optex", innerHTML:"CROPTEX", icon:<GiRadarSweep/>},
    {title: "Smartshock", class: "buttons devicesbtn mgimg", id:"shock", innerHTML:"SMARTSHOCK", icon:<FaMagnet/>},
    {title: "Arlo", class: "buttons devicesbtn arloimg", id:"arlo", innerHTML:"ARLO", icon:<SiArlo/>},
    {title: "Campir", class: "buttons devicesbtn yrimg", id:"campir", innerHTML:"CAMPIR", icon:<FaCameraRetro/>},
    {title: "SVK", class: "buttons devicesbtn svkimg", id:"key", innerHTML:"SVK", icon:<RiKeyboardLine/>},
    {title: "Orion", class: "buttons devicesbtn orionimg", id:"orion", innerHTML:"ORION", icon:<MdCameraRear/>},
    {title: "Cam6430", class: "buttons devicesbtn smgextimg", id:"camext", innerHTML:"CAM 6430", icon:<GiCctvCamera/>},
    {title: "OwaApp", class: "buttons devicesbtn owaimg", id:"owaapp", innerHTML:"OWA APP", icon:<GiSmartphone/>},
    {title: "Keyfog", class: "buttons devicesbtn keyimg", id:"keyfog", innerHTML:"KEYFOG", icon:<RiRemoteControlFill/>},
    {title: "Cam6415", class: "buttons devicesbtn n1img", id:"camint", innerHTML:"CAM 6415", icon:<GiCctvCamera/>},
    {title: "Central", class: "buttons devicesbtn centimg", id:"cent", innerHTML:"CENTRAL", icon:<GiRadioTower/>},
    {title: "VerisurePortal", class: "buttons devicesbtn vpimg", id:"vp", innerHTML:"VERISURE PORTAL", icon:<GiTablet/>},
    {title: "SmokeSensor", class: "buttons devicesbtn smokeimg", id:"smoke", innerHTML:"SMOKE SENSOR", icon:<GiFireExtinguisher/>},
    {title: "WaterSensor", class: "buttons devicesbtn waterimg", id:"water", innerHTML:"WATER SENSOR", icon:<FaHandHoldingWater/>},
    {title: "Zerovision", class: "buttons devicesbtn zvimg", id:"zv", innerHTML:"ZEROVISION", icon:<GiSmokeBomb/>},
    {title: "Sentinel", class: "buttons devicesbtn jzimg", id:"jz", innerHTML:"SENTINEL", icon:<GoRadioTower/>},
    {title: "BotonSOS", class: "buttons devicesbtn abtnimg", id:"sosbtn", innerHTML:"BOTON SOS", icon:<ImWarning/>}
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
                    <button key={linkBtn.title} className={linkBtn.class} icon={linkBtn.icon}>
                        <div>
                        {linkBtn.icon}
                        </div>
                        <LinkBtn icon={linkBtn.icon} className={linkBtn.class} innerHTML={linkBtn.innerHTML}/>
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