import React from "react";
import NavStyles from "./TopNav.module.scss";

function TopNav() {
  return (
    <header className={NavStyles.head}>
      <h1>Enstagram</h1>
      <input></input>
      <i className={`fa-solid fa-magnifying-glass ${NavStyles.searchIcon}`}></i>
      <i className={`fa-solid fa-house ${NavStyles.homeIcon}`}></i>
      <i className={`fa-solid fa-paper-plane ${NavStyles.planeIcon}`}></i>
      <i className={`fa-regular fa-square-plus ${NavStyles.newIcon}`}></i>
      <i className={`fa-regular fa-compass ${NavStyles.compassIcon}`}></i>
      <i className={`fa-regular fa-heart ${NavStyles.heartIcon}`}></i>
      <img src="" />
    </header>
  );
}

export default TopNav;
