import React from "react";
import "./Header.css";
//import useLocalStorage from "use-local-storage";
//import Form from "react-bootstrap/Form";

const Header = () => {
  return (
    <div className="header">
      <header className="header_wrapper">
        <div className="header_title">
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="header_toggle">
          <div className="dark_mode">
            <h4>Dark Mode</h4>
          </div>
          <div className="switch_toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
