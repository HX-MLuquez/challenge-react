import "./Home.css";
import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import List from "./List.jsx";
import { useState } from "react";

function Home({ allCharacters }) {
  //console.log(allCharacters)

  const [chars, setChars] = useState({
    cardLeft: {},
    cardRight: {},
  });
  const [listC, setList] = useState([]);

  const search = function (name, cardLocation) {
    const findCharacter = allCharacters.find((c) => c.name === name);
    if (cardLocation === "left") {
      setChars({ ...chars, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setChars({ ...chars, cardRight: findCharacter });
    }
    // console.log(chars)
  };
  const addList = function () {
    if(listC.length === 0){
        setList(allCharacters)
    } else {
        setList([])
    }
  };
  const random = function (cardLocation) {
    function getNumRandom(max) {
      return Math.floor(Math.random() * max);
    }
    const idRandom = getNumRandom(87) + 1;
    const findCharacter = allCharacters.find((c) => c.id === idRandom);
    if (cardLocation === "left") {
      setChars({ ...chars, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setChars({ ...chars, cardRight: findCharacter });
    }
  };

  return (
    <div className="home">
      <NavBar search={search} addList={addList} random={random} />
      <h3>Star Wars Battle!!!</h3>
      <Cards characters={chars} />
      <div className="list">
        <List lista={listC} />
      </div>
    </div>
  );
}

export default Home;
