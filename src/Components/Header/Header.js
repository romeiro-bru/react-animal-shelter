import React from "react";
import atom from "../../../public/assets/svgs/atom.svg";
import "./style.css";

export function Header() {
  return (
    <>
      <h1>
        30 days of React
        <img src={atom} alt="atom" />
      </h1>
      <h2>Day 7</h2>
    </>
  );
}
