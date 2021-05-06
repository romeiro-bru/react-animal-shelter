import "./styles.css";
import { Header } from "./Components/Header/Header";
import kitty from "./kitty.svg";
import { useState } from "react";

const animalList = [
  {
    age: "Adult",
    species: "Dog",
    size: "Medium",
    health: "Healthy"
  }
];

export default function App() {
  const [animal, setAnimal] = useState(animalList);

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("New animal");
  };

  return (
    <div className="App">
      <Header />

      <section className="search-animals">
        <img src={kitty} alt={kitty} />
        <form>
          <select>
            <option>Puppy</option>
            <option>Adolescent</option>
            <option>Adult</option>
            <option>Elderly</option>
          </select>
          <input placeholder=" Species"></input>
          <input placeholder=" Size"></input>
          <input placeholder=" Health"></input>
          <button onClick={handleAdd}>Add Animal</button>
        </form>
      </section>

      <section></section>
    </div>
  );
}
