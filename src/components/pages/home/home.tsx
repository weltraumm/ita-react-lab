import "./home.scss";
import { SearchBar } from "./searchBar/searchBar";
import { GraySection } from "./graySection/graySection";
import { Categories } from "./categories/categories";

export const HomePage: React.FC = () => {
  return (
    <div className="section">
      <SearchBar />
      <GraySection title="Categories">
        <Categories />
      </GraySection>
      <GraySection title="New games">
        <></>
      </GraySection>
    </div>
  );
};
