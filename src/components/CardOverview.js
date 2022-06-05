import React from "react";
import "./CardOverview.css";
//import iconUp from "../images/icon-up.svg";
//import iconDown from "../images/icon-down.svg";

const CardOverview = ({
  socialIcon,
  handle,
  follows,
  highlighs,
  iconarrow,
  colorhighlight,
}) => {
  return (
    <div className="overview_container">
      <div className="card_overview">
        <div className="card_overview_contents">
          <div className="overview_handle">
            <h4>{handle}</h4>
            <h1 className="overview_followers">{follows}</h1>
          </div>
          <div className="bottom">
            <img src={socialIcon} />
            <p className="overview_highlight" style={{ color: colorhighlight }}>
              <img src={iconarrow} /> {highlighs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOverview;
