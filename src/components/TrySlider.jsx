import React from "react";
import "./AboutUs.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slide from "react-slick"
import NewsImg from "./img/News.png"

export default function NewSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    return(        
        <section id="News">
        <div className="carousel">
                        <h2 className="NewsTitle">Новини</h2> 
            <Slide {...settings}>
            <div className="box">
            <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <a href="/AllNews">
                    <div className="NewsElementText" >
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                    </a>
                </li>
            </div>

            <div className="box">
            <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <a href="/AllNews">
                    <div className="NewsElementText" >
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                    </a>
                </li>
            </div>

            <div className="box">
            <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <a href="/AllNews">
                    <div className="NewsElementText" >
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                    </a>
                </li>
            </div>

            <div className="box">
            <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <a href="/AllNews">
                    <div className="NewsElementText" >
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                    </a>
                </li>
            </div>

            <div className="box">
            <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <a href="/AllNews">
                    <div className="NewsElementText" >
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                    </a>
                </li>
            </div>

            <div className="box">
            <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <a href="/AllNews">
                    <div className="NewsElementText" >
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                    </a>
                </li>
            </div>

            <div className="box">
            <li className="swiper-slide">
                    <img className="NewsElementImg" src={NewsImg} alt="" />
                    <a href="/AllNews">
                    <div className="NewsElementText" >
                        <h4 className="NewsElementTitle"> Чого найбільше бояться підлітки-сироти...</h4>
                        <p className="NewsElementInformstion">Підлітки, у яких немає батьків та близьких, і які перебувають...</p>
                    </div>
                    </a>
                </li>
            </div>
            </Slide>
        </div>
        </section>
    )
}