import React from "react";
import "./Card.css";
import ClearIcon from "@material-ui/icons/Clear";

function Card() {
  return (
    <div className="card">
      <div className="card__info">
        <ClearIcon className="card__cancelButton" />
        <div className="card__content">
          <h2>Title</h2>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
            nobis illo esse tempora maiores earum praesentium exercitationem
            quis corrupti est ad vel! Vitae repellat minima est eius sit ut
            nihil!
          </span>
          <p className="card__Date">Date</p>
        </div>
      </div>
      <img
        className="card__img"
        src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
        alt=""
      />
    </div>
  );
}

export default Card;
