import "./Home.css";
import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
import List from "./List.jsx";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Cards />
      <div className="list">
        <List />
      </div>
    </div>
  );
}

export default Home;
