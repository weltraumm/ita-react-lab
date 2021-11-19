import { SearchBar } from "./searchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";

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

  return (
    <div className="section">
      <SearchBar games={games} />
    </div>
  );
};
