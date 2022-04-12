import * as React from "react";
import img1 from "../../img/person.jpg";
import img2 from "../../img/bug.png";
import img21 from "../../img/bug2.png";
import img3 from "../../img/timer.jpg";
import "./card.css";

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <img src={img1} />
        <div className="card-body">
          <h3>Кандидаты на трудоустройство</h3>
        </div>
      </div>
      <div className="card">
        <img src={img21} className="img" />
        <div className="card-body card2">
          <h3>Разместить вакансию</h3>
        </div>
      </div>
      <div className="card">
        <img src={img3} />
        <div className="card-body card3">
          <h3>Быстрое размещение</h3>
        </div>
      </div>
    </div>
  );
}
export default Cards;