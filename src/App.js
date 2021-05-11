import "./styles.css";
import { Header } from "./Components/Header/Header";
import kitty from "./kitty.svg";
import { useState } from "react";

const initialVal = [
  { name: "Nami", species: "Cat", age: "Puppy", size: "Small" },
  { name: "Milo", species: "Goat", age: "Adult", size: "Medium" }
];

export default function App() {
  const [inputs, setInputs] = useState({});
  const [animal, setAnimal] = useState(initialVal);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // const name = e.target.name;
    // const value = e.target.value;
    // const { name, value } = e.target;
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputs && setAnimal([...animal, inputs].reverse());

    e.target.reset();
    setInputs({
      name: "",
      species: "",
      age: "Puppy",
      size: ""
    });
  };

  return (
    <div className="App">
      <Header />

      <section className="form">
        <img src={kitty} alt={kitty} />
        <form onSubmit={handleSubmit}>
          <input
            value={animal.name}
            name="name"
            onChange={handleInputChange}
            placeholder=" Name"
          ></input>
          <input
            value={animal.species}
            name="species"
            onChange={handleInputChange}
            placeholder=" Species"
          ></input>
          <select value={animal.age} name="age" onChange={handleInputChange}>
            <option value="Puppy">Puppy</option>
            <option value="Adolescent">Adolescent</option>
            <option value="Adult">Adult</option>
            <option value="Elderly">Elderly</option>
          </select>
          <input
            value={animal.size}
            name="size"
            onChange={handleInputChange}
            placeholder=" Size"
          ></input>

          <button type="submit">Add Animal</button>
        </form>
      </section>

      <section className="cards">
        <ul>
          {animal.map((item, index) => (
            <li key={index} className="card-animals">
              <p>Name: {item.name}</p>
              <p>Species: {item.species}</p>
              <p>Age: {item.age}</p>
              <p>Size: {item.size}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
