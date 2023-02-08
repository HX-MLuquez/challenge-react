import "./NavBar.css";
import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import List from "./List.jsx";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <NavBar />
      <Cards />
      <div className="list">
        <List />
      </div>
    </div>
  );
}

export default Home;
