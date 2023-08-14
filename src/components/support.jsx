import React from "react";
import "./AboutUs.css";
import SupportBG from "./img/SupportImg.png"

export default function Support() {
    return (
        <div>
            <h2 className="NewsTitle">Підтримка</h2>
            <div className="SupportInformation">
                <div className="SupportMenu" >
                    <h2>Банківські реквізити</h2>
                    <div className="PartSupportMenu">
                        <h3>Благодійна організація</h3>
                        <p>...................................................</p>
                    </div>

                    <div className="PartSupportMenu">
                        <h3>Код ЄДРПОУ</h3>
                        <p>......................</p>
                    </div>

                    <div className="PartSupportMenu">
                        <h3>Адреса</h3>
                        <p>................................................</p>
                    </div>

                    <div className="PartSupportMenu">
                        <h3>р/р в АТ КБ “ПРИВАТБАНК”</h3>
                        <p>..................................................................................</p>
                    </div>
                </div>
                <div className="lineSupport"></div>
                <div>
                    <p className="SupportText">Підтримайте Спільноту та подбайте про щасливе майбутнє молоді!</p>
                    <a href="/Donate">
                    <button className="SupportButt">Підтримати</button>
                    </a>
                </div>
            </div>
        </div>
    )}