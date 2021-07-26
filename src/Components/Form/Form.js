import React from "react";
import { useState } from "react";
import "./style.css";
import kitty from "../../../public/assets/svgs/kitty.svg";
import { Animal } from "../Animal/Animal";

const initialVal = [
  {
    name: "Nami",
    species: "Cat",
    age: "Puppy"
  },
  {
    name: "Milo",
    species: "Goat",
    age: "Adult"
  }
];

export function Form() {
  const [inputs, setInputs] = useState({});
  const [animList, setAnimList] = useState(initialVal);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimList([...animList, inputs].reverse());

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
      <form onSubmit={handleSubmit} className="inline-block">
        <img src={kitty} alt={kitty} />
        <input
          value={animList.name}
          name="name"
          onChange={handleInputChange}
          placeholder=" Name"
          required
        ></input>
        <input
          value={animList.species}
          name="species"
          onChange={handleInputChange}
          placeholder=" Species"
          required
        ></input>
        <select value={animList.age} name="age" onChange={handleInputChange}>
          <option value="Age">Age</option>
          <option value="Puppy">Puppy</option>
          <option value="Adolescent">Adolescent</option>
          <option value="Adult">Adult</option>
          <option value="Elderly">Elderly</option>
        </select>

        <button type="submit">Register</button>
      </form>

      <section className="cards">
        <Animal animList={animList} />
      </section>
    </>
  );
}
