import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosSecure.get(`/foods`);
      const result = await res.data;
      setFoods(result);
    };
    fetchData();
  }, [axiosSecure]);

  return [foods];
};

export default useFoods;
