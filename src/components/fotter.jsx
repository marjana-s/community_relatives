import React from "react";
import "./AboutUs.css";
import logo from "./img/logo.png"
import contacts from "./img/Contcts.png"
import sociable from "./img/Sociable.png"

export default function Fotter() {
    return (
        <sector id="Footer">
                <div className="Footer">
            <img className="headerimg" src={logo} alt="" />
            <div className="FooterList">
                <p>Про нас</p>
                <p>Концепція</p>
                <p>Новини</p>
                <p>Партнери</p>
            </div>
            <img className="footerimg" src={contacts} alt="" />
            <img className="footerimg" src={sociable} alt="" />
            </div>
        </sector>
    )}