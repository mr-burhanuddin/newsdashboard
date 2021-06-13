import React from "react";
import "./Card.css";
import ClearIcon from "@material-ui/icons/Clear";

function Card({ id, key, title, date, summary, link }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div className="card">
      <div className="card__info">
        <ClearIcon className="card__cancelButton" />
        <div className="card__content">
          <h4>{title}</h4>
          <span>{truncate(summary, 150)}</span>
          <p className="card__Date">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
