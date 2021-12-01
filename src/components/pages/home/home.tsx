import { SearchBar } from "./searchBar";
import "./home.scss";
import { GraySection } from "./graySection";

export const HomePage: React.FC = () => {
  return (
    <div className="section">
      <SearchBar />
      <GraySection title="Categories"></GraySection>
      <GraySection title="New games"></GraySection>
    </div>
  );
};
