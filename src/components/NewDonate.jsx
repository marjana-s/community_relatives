import React from 'react';
import "./AboutUs.css";
import "./styleAdaptive.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Triagle from "./img/triagle.png"

function NewDonate() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div >
      <Button variant="primary" onClick={handleShow}>
        <p>
        Банківські реквізити
      </p>
      <img src={Triagle} alt="" />
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          Банківські реквізити
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Button>
            <p>
            uah / Українська гривня
      </p>
            </Button>

            <Button>
            <p>
            usd / Долар сша
      </p>
            </Button>
            <Button>
            <p>
            eur / Євро
      </p>
            </Button>
            <Button>
            <p>
            pln / Польський злотий
      </p>
            </Button>
            <Button>
            <p>
            gbp / Фунт стерлінгів
      </p>
            </Button>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
  );
}

export default NewDonate;