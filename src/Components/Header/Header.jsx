import React from "react";
import Select from "react-select";
import "./Header.css";
import bLogo from "../../Assets/blogo.png";
import pLogo from "../../Assets/plogo.jpg";

function Header() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "library", label: "Library" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="header-container">
      <div className="btn-container">
        <img className="logo rotate-logo" src={bLogo} alt="Brand Logo" />
        <button className="btn">About us</button>
        <button className="btn">Support&Suggestion</button>
      </div>
      <div className="hlc">
        <img className="logo" src={pLogo} alt="Personal Logo" />
        <Select options={options} />
      </div>
    </div>
  );
}

export default Header;
