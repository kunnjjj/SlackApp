import React from "react";

import HistoryIcon from "./icons/historyIcon/HistoryIcon";
import SearchBar from "./searchBar/SearchBar";
import UserLogo from "../userLogo/UserLogo";
import HelpIcon from "./icons/helpIcon/HelpIcon";

import "./top-navbar.css";

const TopNavbar = () => {
  return (
    <nav className="top-nav">
      <div className="top-nav-left">
        <HistoryIcon />
      </div>
      <div className="top-nav-mid">
        <SearchBar />
      </div>
      <div className="top-nav-right">
        <HelpIcon />
        <UserLogo />
      </div>
    </nav>
  );
};

//Discussed
export default TopNavbar;
