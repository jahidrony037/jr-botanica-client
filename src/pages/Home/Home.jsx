import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JR-Botanica</title>
      </Helmet>
      <div>
        <Banner />
      </div>
    </div>
  );
};

export default Home;
