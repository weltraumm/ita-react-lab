import "./footer.scss";
import sonyPic from "../../assets/images/sony.png";
import nintendoPic from "../../assets/images/nintendo.svg";
import epicgamesPic from "../../assets/images/epicgames.png";
import eaPic from "../../assets/images/ea.svg";
import activisionPic from "../../assets/images/activision.svg";

class CompanyLink {
  id: string;
  href: string;
  pic: string;
  alt: string;

  constructor(company: string, pic: string) {
    this.id = company;
    this.href = `https://www.${company}.com/`;
    this.pic = pic;
    this.alt = company;
  }
}

export const Footer: React.FC = () => {
  const sony = new CompanyLink("sony", sonyPic);
  const nintendo = new CompanyLink("nintendo", nintendoPic);
  const epicgames = new CompanyLink("epicgames", epicgamesPic);
  const ea = new CompanyLink("ea", eaPic);
  const activision = new CompanyLink("activision", activisionPic);

  const companies: Array<CompanyLink> = [sony, nintendo, epicgames, ea, activision];

  return (
    <footer>
      <span>Incredible convenient</span>
      <div className="companies-logo">
        {companies.map((company) => {
          return (
            <a href={company.href} target="_blank">
              <img id={company.id} src={company.pic} alt={company.alt} />
            </a>
          );
        })}
      </div>
    </footer>
  );
};
