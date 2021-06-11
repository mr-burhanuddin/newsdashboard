import React from "react";
import Card from "./Card";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Main;
