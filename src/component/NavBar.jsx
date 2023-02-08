import React from "react";
import "./NavBar.css";
import Search from "./Search";
import Random from "./Random";

export default function NavBar({search,addList,random}) {
  return (
    <div className="navBar">
      <Search search={search} cardLocation="left"/>
      <Random random={random} cardLocation="left"/>

      <button onClick={addList}>All Characters</button>

      <Search search={search} cardLocation="right"/>
      <Random random={random} cardLocation="right"/>
    </div>
  );
}
