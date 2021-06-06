import React from "react";
import SideBar from "../sidebar/SideBar";
import iconImg from "../../img/icon.jpg";
import "./styles.css";

const Navbar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <SideBar setCategory={setCategory} />
      </div>
      <img src={iconImg} alt="icon" className="nav-img" />
      <h3>News Reader</h3>
    </div>
  );
};

export default Navbar;
