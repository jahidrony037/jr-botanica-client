import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BsFillGrid3X3GapFill, BsGridFill } from "react-icons/bs";
import FoodCard from "../../components/FoodCard";
import Loader from "../../components/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AvailableFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosSecure.get("/availableFoods");
      setAllItems(res.data);
    };
    fetchData();
  }, [axiosSecure]);

  const [layoutIndex, setLayoutIndex] = useState(0);
  //   console.log(layoutIndex);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  //   console.log(searchValue);
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSearchValue(e.target.search.value);
    const res = await axiosSecure.get(`/searchFood?search=${searchValue}`);
    if (!res.data) {
      return setError("Not Found Data");
    }
    setAllItems(res.data);
  };

  const handleChangeValue = async (e) => {
    const res = await axiosSecure.get(`/searchFood?search=${e.target.value}`);
    if (!res.data) {
      return setError("Not Found Data");
    }
    setAllItems(res.data);
  };

  const handleSort = async (url) => {
    const res = await axiosSecure.get(`/sortFoods/${url}`);
    setAllItems(res.data);
  };

  const handleAllFood = async () => {
    const res = await axiosSecure.get("/availableFoods");
    setAllItems(res.data);
  };
  //   const { foods, isPending } = useFoods("availableFoods");

  return (
    <div>
      <Helmet>
        <title>JR-Botanica | AvailableFoods</title>
      </Helmet>
      <h2 className="text-center font-bold text-[#84d814] text-4xl mt-5">
        ALL FOODS HERE
      </h2>
      <div className="flex flex-col items-center gap-9 md:flex-row md:gap-2 md:justify-around md:items-center my-10">
        <div>
          <form onSubmit={handleSearchSubmit} className="flex">
            <label className="flex items-center gap-2 w-[250px] focus:outline-none">
              <input
                type="text"
                className="focus:outline-none input input-bordered w-full focus:border-[#84d814]"
                name="search"
                onChange={handleChangeValue}
                placeholder="Search by Food Name"
              />
            </label>
            <input
              className="btn -ml-[7px] rounded-r-full border-[#84d814] bg-[#84d814] text-[white]"
              type="submit"
              value="Search"
            />
          </form>
        </div>

        <div className="flex gap-4 items-center">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#84d814] hover:bg-[#84d814] text-white"
            >
              Sort by Date
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 pl-0 bg-base-100 rounded-box w-52 space-y-2"
            >
              <li
                className="btn hover:bg-[#84d814] hover:text-[#FFFF]"
                onClick={() => handleSort("ascending")}
              >
                Ascending
              </li>
              <li
                className="btn hover:bg-[#84d814] hover:text-[#FFFF]"
                onClick={() => handleSort("descending")}
              >
                Descending
              </li>
            </ul>
          </div>

          <div>
            <button
              onClick={() => handleAllFood()}
              className="btn bg-[#84d814] hover:bg-[#84d814] text-white"
            >
              All Foods
            </button>
          </div>
        </div>

        <div className="md:flex gap-4  hidden">
          <BsFillGrid3X3GapFill
            className={`cursor-pointer ${layoutIndex === 0 && `border`}`}
            onClick={() => setLayoutIndex(0)}
            size={35}
          />

          <BsGridFill
            className={`cursor-pointer ${layoutIndex === 1 && `border`}`}
            size={35}
            onClick={() => setLayoutIndex(1)}
          />
        </div>
      </div>
      {!allItems.length ? (
        <Loader />
      ) : (
        <div
          className={`mt-[50px] grid md:${
            layoutIndex === 1 ? "grid-cols-2" : "grid-cols-3"
          } grid-cols-1 gap-6 justify-items-center`}
        >
          {allItems?.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      )}
      {error && <span className="text-red-600 text-5xl">{error}</span>}
    </div>
  );
};

export default AvailableFoods;
