import { useState, useEffect } from "react";
import magnifier from "../../../assets/images/magnifier.svg";
import "./searchBar.scss";
import axios from "axios";

interface IGame {
  title: string;
}

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState("");
  const [filteredGames, setFilteredGames] = useState<IGame[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [isRequesting, setIsRequesting] = useState(false);

  useEffect(() => {
    setFilteredGames([]);
    setIsRequesting(true);
    const delayDebounceFn = setTimeout(() => {
      axios.get(`http://localhost:3000/games?title_like=${value}`).then((response) => {
        setFilteredGames(response.data);
        setIsRequesting(false);
      });
    }, 300);
    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [value]);

  const itemClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const input = e.target as HTMLElement;
    setValue(input.textContent!);
    setIsOpen(!isOpen);
    alert("got product");
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <form className="search_form">
      <input
        className="search_input"
        type="text"
        value={value}
        placeholder="Search"
        onChange={(event) => setValue(event.target.value)}
        onClick={inputClickHandler}
      />

      <ul className="autocomplete">
        {value && isOpen
          ? filteredGames.map((game) => {
              return (
                <li className="autocomplete_item" onClick={itemClickHandler}>
                  {game.title}
                </li>
              );
            })
          : null}
      </ul>
      {isRequesting ? (
        <div className="loader_img"></div>
      ) : (
        <img src={magnifier} alt="magnifier_img" className="magnifier_img" />
      )}
    </form>
  );
};
