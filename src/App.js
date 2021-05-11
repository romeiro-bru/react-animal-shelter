import "./styles.css";
import { Header } from "./Components/Header/Header";
import kitty from "./kitty.svg";
import { useState } from "react";

const initialVal = [{ name: "", age: "Puppy", species: "", size: "" }];

export default function App() {
  const [input, setInput] = useState("");
  const [animal, setAnimal] = useState(initialVal);

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);

    // const name = e.target.name;
    // const value = e.target.value;
    // const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    input && setAnimal([...animal, input]);
    setInput("");
    console.log(animal);
  };

  return (
    <div className="App">
      <Header />

      <section className="input-animals">
        <img src={kitty} alt={kitty} />
        <form onSubmit={handleSubmit}>
          <select value={animal.age} name="age" onChange={handleInputChange}>
            <option value="Puppy">Puppy</option>
            <option value="Adolescent">Adolescent</option>
            <option value="Adult">Adult</option>
            <option value="Elderly">Elderly</option>
          </select>
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
          <input
            value={animal.size}
            name="size"
            onChange={handleInputChange}
            placeholder=" Size"
          ></input>

          <button type="submit">Add Animal</button>
        </form>
      </section>

      <section className="card-animals">
        <ul>
          {animal.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <p>{item.age}</p>
              <p>{item.species}</p>
              <p>{item.size}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
