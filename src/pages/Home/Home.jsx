import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import ChooseUS from "../../components/ChooseUS";
import Foods from "../../components/Foods";
import OurMenu from "../../components/OurMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JR-Botanica</title>
      </Helmet>
      <div className="space-y-24">
        <Banner />
        <Foods />
        <ChooseUS />
        <OurMenu />
      </div>
    </div>
  );
};

export default Home;
