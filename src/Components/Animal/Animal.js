import React from "react";
import "./style.css";

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
const currDate = `${date}/${month < 10 ? `0${month}` : `${month}`}/${year}`;

export function Animal({ animList }) {
  return (
    <>
      <ul>
        {animList.map((item, index) => (
          <li key={index} className="card-animals">
            <p>Name: {item.name}</p>
            <p>Species: {item.species}</p>
            <p>Age: {item.age}</p>
            <p>Size: {item.size}</p>
            <p>Date: {currDate}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
