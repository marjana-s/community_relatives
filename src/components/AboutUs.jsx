import React from "react";
import "./AboutUs.css";
import "./styleAdaptive.css";
import Aboutus from "./img/Aboutus.png";
import Message from "./img/Message about.png";
import logo2 from "./img/LOGO2.png";
import logo3 from "./img/Logo msc.png";
import developtment from "./img/developtment.png";
import enviroment from "./img/enviroment.png";
import community from "./img/community.png";
import AdaptiveInform from "./AdaptiveInform.jsx"
export default function AboutUs() {
  return (
    <body>
      <div id="AboutUs" className="AboutUs">
        <div className="AboutText">
          <h1 className="AboutUsHeader">Про нас</h1>
          <div>
            <p>
              <b>Простір “Спільнота” </b>- унікальний осередок, який має на меті
              забезпечити комплексну підтримку та розвиток молоді і допомогти
              розірвати коло сирітства, готуючи підлітків до самостійного життя.
            </p>
            <p>
              Тут проживатиме та навчатиметься молодь (хлопці та дівчата) з
              інтернатних закладів, сімейних форм виховання та молодь з сімей у
              складних життєвих обставинах, які постраждали від війни.
            </p>
          </div>
        </div>
        <img className="AboutUsPhoto" src={Aboutus} alt="" />
      </div>
      <div className="AboutPhoto">
        <img src={Message} alt="Message" />
        <div className="ChiledBlockAboutPhoto">
          <img src={logo2} alt="logo2" />
          <img src={logo3} alt="logo3" />
        </div>
      </div>
      <section id="Concept">
        <div className="line"></div>
        <div className="ConceptMainText">
          <p className="ConceptText">
            Концепція простору передбачає створення безпечного місця для
            всебічного розвитку молоді задля їх благополучного майбутнього.
          </p>
        </div>
        <div className="line"></div>
      </section>
      <div>
        <h1 className="AboutBlocksHeader">Наповнення формаційної програми</h1>
        <div className="AboutBlocks">
          <div className="AboutBlock">
            <img src={developtment} alt="" />
            <div className="AboutBlockText">
              <b>Особистий розвиток</b>
              <p>
                Пізнання та прийняття себе. Нагода краще зрозуміти себе та
                відкрити у собі таланти для подальшого їх розвитку.
              </p>
            </div>
          </div>

          <div className="AboutBlock">
            <img src={enviroment} alt="" />
            <div className="AboutBlockText">
              <b>Виховне середовище</b>
              <p>
                Можливість всебічно розвиватися завдяки запропонованій
                навчальній програмі.
              </p>
            </div>
          </div>

          <div className="AboutBlock">
            <img src={community} alt="" />
            <div className="AboutBlockText">
              <b>Формування спільноти</b>
              <p>
                Створення кола активних молодих людей з сильною проактивною та
                моральною позицією в суспільстві.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="InformationList">
        <h1 className="InformationListTitle">
          Формаційна програма «Спільнота-Рідні» працює у двох напрямках
        </h1>
        <div className="InformationListBlocks">
          <div className="InformationListBlock">
            <h3>Для резидентів</h3>
            <div className="lineTwo"></div>
            <p>Програма передбачає навчання</p>
            <div className="InformationListElements">
              <ul>
                <li>Через щоденну практику (побутове життя в Спільноті)</li>
                <li>Через участь (тренінги, лекції, майстер класи)</li>
                <li>
                  Через дію (стажування, практика, реалізація соціального
                  проекту для громади)
                </li>
                <li>Через обговорення та рефлексія (зустрічі, дискусії)</li>
              </ul>
            </div>
          </div>
          <div className="InformationListBlock">
            <h3>Для підлітків міста Львова</h3>
            <div className="lineTwo"></div>
            <p>Програма передбачає можливість відкритої участі</p>
            <div className="InformationListElements">
              <ul>
                <li>
                  Основні напрямки: психологія, лідерство, патріотизм та
                  культура, фінансова грамотність{" "}
                </li>
                <li>Формат проведення: тренінги, лекції, майстер класи</li>
                <li>
                  Можливість реалізації соціальних ініціатив в проектних
                  командах однолітків
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AdaptiveInform></AdaptiveInform>
    </body>
  );
}
