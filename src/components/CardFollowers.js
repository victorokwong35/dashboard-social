import React from "react";
import "./CardFollowers.css";
import iconUp from "../images/icon-up.svg";


const CardFollowers = ({ socialIcon, handle, followers, subfollows, highlighs, colorline }) => {
  return (
    <div>
      <div className="card_container">
        <div className="card">
          <div className="card_line_top" style={{ backgroundColor: colorline }}></div>
    
          <div className="card_contents">
            <div className="social_handle">
              <img src={socialIcon} />
              <span>{handle}</span>
            </div>
            <h1 className="number_followers">{followers}</h1>
            <h5 className="followers">{subfollows}</h5>
            <p className="today_highlight">
              <img src={iconUp} /> {highlighs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFollowers;
