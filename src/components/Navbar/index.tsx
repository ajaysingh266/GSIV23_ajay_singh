import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import "./index.scss";
interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="navbarConatiner">
      <div className="inputWrapper">
        <AiOutlineSearch />
        <input
          className="inputClass"
          type="text"
          placeholder="Search for a movie .."
        />
      </div>
      <nav>
        <AiFillHome className="homeIcon" />
      </nav>
    </header>
  );
};

export default Navbar;
