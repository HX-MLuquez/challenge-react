import React from "react";
import "./NavBar.css";
import Search from "./Search";
import Random from "./Random";

export default function NavBar() {
  return (
    <div className="navBar">
      <Search />
      <Random />

      <button>All Characters</button>

      <Search />
      <Random />
    </div>
  );
}
