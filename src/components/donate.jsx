import React from "react";
import "./AboutUs.css";
import "./styleAdaptive.css"
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Triagle from "./img/triagle.png";
import NewDonate from "./NewDonate";
import Support2 from "./img/Support2.png"
function Donate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Donate">
      <div className="DonatePage">
        <h1>Оберіть спосіб підтримки</h1>
        <div>
          <Button variant="primary" onClick={handleShow}>
            <p >Кредитна карта</p>
            <img src={Triagle} alt="" />
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Кредитна карта</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Button>
                <p>Платіжна карта</p>
              </Button>

              <Button>
                <p>Карта від Монобанк</p>
              </Button>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <NewDonate></NewDonate>
        <Button>
          <p>Криптовалюта</p>
        </Button>
        <Button>
          <p>Patreon</p>
        </Button>
      </div>
      <div className="DonateText">
        <h2>Підтримка</h2>
        <p>Підтримайте Спільноту та подбайте про щасливе майбутнє молоді!</p>
        <img src={Support2} alt="" />
      </div>
    </div>
  );
}

export default Donate;
