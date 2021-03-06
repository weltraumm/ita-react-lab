import "./categories.scss";
import { NavLink } from "react-router-dom";
import pcPic from "../../../../assets/images/pc.svg";
import playstationPic from "../../../../assets/images/playstation.svg";
import xboxPic from "../../../../assets/images/xbox.svg";

interface ICategory {
  name: string;
  pic: string;
  url: string;
}

const categories: Array<ICategory> = [
  { name: "PC", pic: pcPic, url: "/pc" },
  { name: "Playstation 5", pic: playstationPic, url: "/playstation" },
  { name: "XBox One", pic: xboxPic, url: "/xbox" },
];

export const Categories: React.FC = () => {
  return (
    <div className="content">
      {categories.map((category) => {
        return (
          <NavLink to={"/products" + category.url} key={category.name} className="card">
            <div className="card_content">
              <img className="card_pic" src={category.pic} alt={category.name} />
              <p className="card_title">{category.name}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
