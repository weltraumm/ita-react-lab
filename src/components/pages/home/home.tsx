import "./home.scss";
import { useEffect, useState } from "react";
// import { SearchBar } from "./searchBar/searchBar";
import { Card } from "./gameCard";
// import { Categories } from "./categories/categories";
// import { NewGames } from "./newGames/newGames";
import axios from "axios";
// import { response } from "express";

interface IGames {
  title: string;
}

export const HomePage: React.FC = () => {
  const [games, setGames] = useState<IGames[]>([]);

  const getGames = () => {
    axios.get("http://localhost:3000/games").then((response) => {
      setGames(response.data);
    });
  };

  useEffect(() => {
    getGames();
  }, []);

  const [value, setValue] = useState("");

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className="background">
      <input type="text" placeholder="Search" onChange={(event) => setValue(event.target.value)} />
      <div className="games">
        {filteredGames.map((game) => {
          return <p>{game.title}</p>;
        })}
      </div>
    </div>
  );
};
