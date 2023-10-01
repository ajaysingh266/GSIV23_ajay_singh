import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import "./index.scss";
interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbarConatiner">
      <header className="inputWrapper">
        <AiOutlineSearch className="outlineSearch" />
        <input className="inputClass" type="text" placeholder="Search" />
      </header>
      <div className="home-icon-wrapper">
        <AiFillHome className="homeIcon" />
      </div>
    </nav>
  );
};

export default Navbar;
