import { Link } from "react-router-dom";
import useFoods from "../hooks/useFoods";
import FoodCard from "./FoodCard";
import Loader from "./Loader";

const Foods = () => {
  const { foods, isPending, error } = useFoods("foods");

  // const { data } = useQuery({
  //   queryKey: ["foods"],
  //   queryFn: async () => {
  //     const res = await axios.get(`/foods`);
  //     return res.data;
  //   },
  // });
  // console.log(data);

  return (
    <div>
      <h2 className="text-4xl text-center font-bold uppercase">
        OUR <span className="text-[#84d814]">FEATURED</span> PRODUCTS
      </h2>
      {isPending ? (
        <Loader />
      ) : (
        <div className=" mt-[50px] grid md:grid-cols-3 grid-cols-1 gap-6 justify-items-center">
          {foods?.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      )}
      <div className="mt-5 flex justify-center">
        <Link
          to="/availableFoods"
          className="md:px-5 px-2 md:py-2 py-1 relative rounded  group overflow-hidden font-medium bg-[#014f2c] text-white inline-block border-[#84d814]  border-[1px] "
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#84d814]  group-hover:h-full opacity-90 "></span>
          <span className="relative group-hover:text-white font-bold">
            More Foods
          </span>
        </Link>
      </div>
      {error && (
        <span className="text-2xl text-center text-red-600">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Foods;
