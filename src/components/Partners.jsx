import React from "react";
import "./AboutUs.css";
import "./styleAdaptive.css"
import PartnersImg from "./img/PartnersImg.png"

export default function Partners() {
    return (
        <section id="Partners">
            <h2 className="NewsTitle">Наші партнери</h2>
            <div className="PartnersList">
                <li className="PartnertsElement">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElement">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElement">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElement">
                    <img src={PartnersImg} alt="" />
                </li>
            </div>
            <div className="PartnersButtons">
                <a href="MorePartners">
            <button className="btn">Дивитись більше</button>
            </a>
            <button className="PartnersButt">Стати партнером</button>
            </div>
        </section>
    )
}