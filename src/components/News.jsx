import React from "react";
import "./AboutUs.css";
import "./styleAdaptive.css"
import NewsImg from "./img/News.png"

export default function News() {
    return (
        <section id="News">
            <h2 className="NewsTitle">Новини</h2> 
            <div class="swiper mySwiper">
      <div class="swiper-wrapper">
            <ul className="NewsList">
                <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <a href="/AllNews">
                    <div className="NewsElementText" >
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                    </a>
                </li>

                <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <div className="NewsElementText">
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                </li>

                <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <div className="NewsElementText">
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                </li>

                <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <div className="NewsElementText">
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                </li>
            </ul>
            </div>
            <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
            </div>
            <button className="btn" type="button">Дивитись більше</button>
        </section>
        
    )}
    