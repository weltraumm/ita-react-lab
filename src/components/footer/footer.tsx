import React from "react";
import "./footer.scss";
import sony from "../../assets/images/sony.png";
import nintendo from "../../assets/images/nintendo.svg";
import epicgames from "../../assets/images/epicgames.png";
import ea from "../../assets/images/ea.svg";
import activision from "../../assets/images/activision.svg";

export const Footer: React.FC = () => {
  return (
    <footer>
      <span>Incredible convenient</span>
      <div className="companies-logo">
        <a href="https://www.sony.com/" target="_blank">
          <img id="sony" src={sony} alt="sony-logo" />
        </a>

        <a href="https://www.nintendo.com/" target="_blank">
          <img id="nintendo" src={nintendo} alt="nintendo-logo" />
        </a>

        <a href="https://www.epicgames.com/" target="_blank">
          <img id="epicgames" src={epicgames} alt="epic-games-logo" />
        </a>

        <a href="https://www.ea.com/" target="_blank">
          <img id="ea" src={ea} alt="ea-logo" />
        </a>

        <a href="https://www.activision.com/" target="_blank">
          <img id="activision" src={activision} alt="activision-logo" />
        </a>
      </div>
    </footer>
  );
};
