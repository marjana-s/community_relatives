import "./AdaptiweHeaderBurger.css"
import Logo from "./img/logo.png"
import DonateButt from "./img/DonateButt.png"
import "./header.css";
import Logo3 from "./img/logo3.png"
import React, { useState } from 'react';
import Menu from "./img/Menu.png"
import CloseMenu from "./img/CloseMenu.png"
import Contcts from "./img/Contcts.png"
import Instagram from "./img/Instagram.png"
import Telegram from "./img/Telegram.png"
import Facebook from "./img/Facebook.png"
const MainHead = ({isActive}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState({});

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        if(isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return {display: "flex"}
            })
        }
    }

    return (
        <header>
        <div className="header">
    <img className="headerimg" src={Logo3} alt=".." />
    {isOpen ? <div style={hideOrShow} onClick={handleMenu}>
        <img className="MenuImg" src={CloseMenu} alt="" />
    </div> : <div style={hideOrShow} onClick={handleMenu}>
    <img className="MenuImg" src={Menu} alt="" />
    </div>}
    <div className="headerMenu" style={hideOrShow}>
    <a href='/AboutUs'>Про нас</a>
    <a href='#Concept'>Концепція</a>
    <a href='#News' >Новини</a>
    <a href='#Partners'>Партнери</a>
    <a href='#Footer'>Контакти</a>
    <a href="/Donate">
    <button className="HeaderDonate">
        <img className="HeaderDonateButt" src={DonateButt} alt="" />
    </button>
    </a>
    <div className="ClouseClassMenu">
        <div className="LineHead"></div>
        <img className="MainImgBurger" src={Contcts} alt="" />
        <div className="ManyImg">
            <img src={Instagram} alt="" />
            <img src={Telegram} alt="" />
            <img src={Facebook} alt="" />
        </div>
    </div>
    </div>
    </div>
    </header>
    )
}
export default MainHead