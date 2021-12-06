import "./categories.scss";
import pcPic from "../../../../assets/images/pc.svg";
import playstationPic from "../../../../assets/images/playstation.svg";
import xboxPic from "../../../../assets/images/xbox.svg";

interface ICategory {
  name: string;
  pic: string;
}

const categories: Array<ICategory> = [
  { name: "PC", pic: pcPic },
  { name: "Playstation 5", pic: playstationPic },
  { name: "XBox One", pic: xboxPic },
];

export const Categories: React.FC = () => {
  return (
    <div className="content">
      {categories.map((category) => {
        return (
          <a href="" key={category.name} className="card">
            <div className="card_content">
              <img className="card_pic" src={category.pic} alt={category.name} />
              <p className="card_title">{category.name}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};
