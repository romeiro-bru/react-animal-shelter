import React from "react";
import { useState } from "react";
import "./style.css";
import kitty from "./kitty.svg";
import { Animal } from "../Animal/Animal";

const initialVal = [
  {
    name: "Nami",
    species: "Cat",
    age: "Puppy",
    size: "Small"
  },
  {
    name: "Milo",
    species: "Goat",
    age: "Adult",
    size: "Medium"
  }
];

export function Input() {
  const [inputs, setInputs] = useState({});
  const [animList, setAnimList] = useState(initialVal);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // const name = e.target.name;
    // const value = e.target.value;
    // const { name, value } = e.target;
    // console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputs && setAnimList([...animList, inputs].reverse());

    e.target.reset();
    setInputs({
      name: "",
      species: "",
      age: "Age",
      size: ""
    });
  };

  return (
    <>
      <section className="form">
        <img src={kitty} alt={kitty} />
        <form onSubmit={handleSubmit}>
          <input
            value={animList.name}
            name="name"
            onChange={handleInputChange}
            placeholder=" Name"
          ></input>
          <input
            value={animList.species}
            name="species"
            onChange={handleInputChange}
            placeholder=" Species"
          ></input>
          <select value={animList.age} name="age" onChange={handleInputChange}>
            <option value="Age">Age</option>
            <option value="Puppy">Puppy</option>
            <option value="Adolescent">Adolescent</option>
            <option value="Adult">Adult</option>
            <option value="Elderly">Elderly</option>
          </select>
          <input
            value={animList.size}
            name="size"
            onChange={handleInputChange}
            placeholder=" Size"
          ></input>

          <button type="submit">Register</button>
        </form>
      </section>

      <section className="cards">
        <Animal animList={animList} />
      </section>
    </>
  );
}
