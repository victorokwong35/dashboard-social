import React from "react";
import Header from "./Header";
import "./Dashboard.css";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import iconUp from "../images/icon-up.svg";
import iconDown from "../images/icon-down.svg";
import CardOverview from "./CardOverview";

import CardFollowers, {
  socialIcon,
  handle,
  followers,
  subfollows,
  highlighs,
  colorline,
  colorhighlight,
} from "./CardFollowers";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-bg">
        <Header />
      </div>
      <div className="dashboard_top">
        <CardFollowers
          colorline={"var(--Facebook)"}
          socialIcon={facebook}
          handle="@nathanf"
          followers={1987}
          subfollows="FOLLOWERS"
          highlighs="12 Today"
        />

        <CardFollowers
          colorline={"var(--Twitter)"}
          socialIcon={twitter}
          handle="@nathanf"
          followers={1044}
          subfollows="FOLLOWERS"
          highlighs="99 Today"
        />

        <CardFollowers
          colorline={"var(--Instagram)"}
          socialIcon={instagram}
          handle="@realnathanf"
          followers="11k"
          subfollows="FOLLOWERS"
          highlighs="1099 Today"
        />

        <CardFollowers
          colorline={"var(--YouTube)"}
          socialIcon={youtube}
          handle="@nathanf"
          followers={1044}
          subfollows="SUBSCRIBERS"
          highlighs="12 Today"
        />
      </div>

      <div className="dashboard_header">
        <h1>Overview Today</h1>
      </div>
      <div className="dashboard_bottom">
        <CardOverview
          iconarrow={iconUp}
          socialIcon={facebook}
          handle="Page Views"
          follows={87}
          subfollows="FOLLOWERS"
          colorhighlight={"var(--LimeGreen)"}
          highlighs="3%"
        />

        <CardOverview
          iconarrow={iconDown}
          socialIcon={facebook}
          handle="Likes"
          follows={52}
          subfollows="FOLLOWERS"
          colorhighlight={"var(--BrightRed)"}
          highlighs="3%"
        />

        <CardOverview
          iconarrow={iconUp}
          socialIcon={instagram}
          handle="Likes"
          follows={5462}
          colorhighlight={"var(--LimeGreen)"}
          highlighs="2257%"
        />

        <CardOverview
          iconarrow={iconUp}
          socialIcon={instagram}
          handle="Page Views"
          follows={"52k"}
          colorhighlight={"var(--LimeGreen)"}
          highlighs="1375%"
        />

        <CardOverview
          iconarrow={iconUp}
          socialIcon={twitter}
          handle="Retweets"
          follows={"52k"}
          colorhighlight={"var(--LimeGreen)"}
          highlighs="303%"
        />

        <CardOverview
          iconarrow={iconUp}
          socialIcon={twitter}
          handle="Likes"
          follows={"507"}
          colorhighlight={"var(--LimeGreen)"}
          highlighs="553%"
        />

        <CardOverview
          iconarrow={iconDown}
          socialIcon={youtube}
          handle="Likes"
          follows={"107"}
          colorhighlight={"var(--BrightRed)"}
          highlighs="19%"
        />

        <CardOverview
          iconarrow={iconDown}
          socialIcon={youtube}
          handle="Total Views"
          follows={"1407"}
          colorhighlight={"var(--BrightRed)"}
          highlighs="12%"
        />
      </div>
    </div>
  );
};

export default Dashboard;
