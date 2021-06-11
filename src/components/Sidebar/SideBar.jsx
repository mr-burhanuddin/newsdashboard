import React, { useState } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import Form from "./Form/Form";

function SideBar({ setCardsActive }) {
  const [formActive, setFormActive] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__cards">
        <div className="sidebar__personInfo">
          <img
            className="sidebar__infoImg"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
          <span className="sidebar__infoText">
            Hi Reader
            <p>Here is Your News !</p>
          </span>
        </div>
        {!formActive ? (
          <div className="sidebar__toggle">
            <div className="sidebar__toggleCard">
              <h4>View Toggle</h4>
              <div className="sidebar__toggleButton">
                <Button
                  size="large"
                  fullWidth
                  onClick={() => setCardsActive(true)}
                >
                  <FeaturedPlayListIcon />
                </Button>
                <Button
                  size="large"
                  fullWidth
                  onClick={() => setCardsActive(false)}
                >
                  <ListIcon />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="sidebar__form">
          <div className="sidebar__formCard">
            <h4> Have A FeedBack ?</h4>
            <Button
              onClick={() => setFormActive(!formActive)}
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              We're Listing !
            </Button>
          </div>
        </div>
      </div>
      {formActive ? (
        <div className="sidebar__formActive">
          <Form />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SideBar;
