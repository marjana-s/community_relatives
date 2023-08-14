import React from "react";
import "./AboutUs.css";
import "./styleAdaptive.css"
import PartnersImg from "./img/PartnersImg.png"

export default function MorePartners() {
    return (
        <section className="MorePartners">
            <h2 className="NewsTitle">Партнери</h2>
            <div className="MorePartnersList">
                <li className="PartnertsElements">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElements">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElements">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElements">
                    <img src={PartnersImg} alt="" />
                </li>
                <li className="PartnertsElements">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElements">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElements">
                    <img src={PartnersImg} alt="" />
                </li>

                <li className="PartnertsElements">
                    <img src={PartnersImg} alt="" />
                </li>
            </div>
            <div className="PartnersButtons">
            <button className="btn">Дивитись більше</button>
            <button className="PartnersButt">Стати партнером</button>
            </div>
        </section>
    )
}