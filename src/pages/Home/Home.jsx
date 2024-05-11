import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
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
      </div>
    </div>
  );
};

export default Home;
