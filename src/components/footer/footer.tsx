import "./footer.scss";
import sonyPic from "../../assets/images/sony.png";
import nintendoPic from "../../assets/images/nintendo.png";
import epicgamesPic from "../../assets/images/epicgames.png";
import eaPic from "../../assets/images/ea.svg";
import activisionPic from "../../assets/images/activision.svg";

interface ICompany {
  id: string;
  href: string;
  pic: string;
}

const companies: Array<ICompany> = [
  { id: "sony", href: "https://www.sony.com", pic: sonyPic },
  { id: "nintendo", href: "https://www.nintendo.com", pic: nintendoPic },
  { id: "epicgames", href: "https://www.epicgames.com", pic: epicgamesPic },
  { id: "ea", href: "https://www.ea.com", pic: eaPic },
  { id: "activision", href: "https://www.activision.com", pic: activisionPic },
];

export const Footer: React.FC = () => (
  <footer>
    <span>Incredible convenient</span>
    <div className="companies-logo">
      {companies.map((company) => {
        return (
          <a href={company.href} target="_blank" key={company.id}>
            <img id={company.id} src={company.pic} alt={company.id} />
          </a>
        );
      })}
    </div>
  </footer>
);
