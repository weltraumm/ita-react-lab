import { useState } from "react";
import img from "../../../assets/images/search.svg";
import "./searchBar.scss";

interface Props {
  games: Array<{
    title: string;
  }>;
}

export const SearchBar: React.FC<Props> = (props) => {
  const [value, setValue] = useState("");

  const filteredGames = props.games.filter((game) => {
    return game.title.toLowerCase().includes(value.toLowerCase());
  });

  const [isOpen, setIsOpen] = useState(true);

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
      <img src={img} alt="img" className="search_img" />
    </form>
  );
};
