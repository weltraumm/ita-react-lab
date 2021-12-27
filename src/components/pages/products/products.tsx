import { useParams } from "react-router-dom";
import { PCPage } from "./pc";
import { PlaystationPage } from "./playstation";
import { XBoxPage } from "./xbox";

export const ProductsPage: React.FC = () => {
  const { category } = useParams();

  switch (category) {
    case "pc":
      return <PCPage />;
    case "playstation":
      return <PlaystationPage />;
    case "xbox":
      return <XBoxPage />;
    default:
      return (
        <>
          <h1>Products page</h1>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, recusandae facere corporis molestiae nisi
            modi doloribus sed repellendus ipsam maiores. Rem nihil architecto quis animi quas eum tenetur libero
            obcaecati?
          </div>
        </>
      );
  }
};
