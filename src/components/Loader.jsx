import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FadeLoader color="#84d814" />
    </div>
  );
};

export default Loader;
