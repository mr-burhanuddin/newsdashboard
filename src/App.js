import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import HoriMain from "./components/MainHori/HoriMain";
import SideBar from "./components/Sidebar/SideBar";

function App() {
  const [cardsActive, setCardsActive] = useState(false);

  return (
    <div className="app">
      <div className="app__sideBar">
        <SideBar setCardsActive={setCardsActive} />
      </div>
      <div className="app__main">{cardsActive ? <Main /> : <HoriMain />}</div>
    </div>
  );
}

export default App;
