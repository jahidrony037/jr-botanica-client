import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import ChooseUS from "../../components/ChooseUS";
import Foods from "../../components/Foods";

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
      </div>
    </div>
  );
};

export default Home;
