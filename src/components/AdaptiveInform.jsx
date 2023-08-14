import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./AboutUs.css"
import "./styleAdaptive.css";
import ImgDropButton from "./img/ForTeenagers.png"
import ImgDropButton2 from "./img/ForResidents.png"

function BasicButtonExample() {
  return (
    <div className='InformationAdaptive'>
      <h1 className="InformationListTitle">
          Формаційна програма «Спільнота-Рідні» працює у двох напрямках
        </h1>
<DropdownButton className='DropButt' id="dropdown-basic-button" src={ImgDropButton}>
      <Dropdown.Item className='DropButtInformation' href="#/action-1">            
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
            </div></Dropdown.Item>
    </DropdownButton>


    <DropdownButton className='DropButt' id="dropdown-basic-button" src={ImgDropButton2}>
      <Dropdown.Item className='DropButtInformation' href="#/action-1">            
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
            </div></Dropdown.Item>
    </DropdownButton>
    </div>
  );
}

export default BasicButtonExample;