import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFoods = (url) => {
  // const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const {
    data: foods,
    isPending,
    error,
  } = useQuery({
    queryKey: [`${url}`],
    queryFn: async () => {
      const res = await axiosSecure.get(`/${url}`);
      return res.data;
    },
  });
  // console.log(typeof foods);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axiosSecure.get(`/foods`);
  //     const result = await res.data;
  //     //   console.log(result);
  //     setFoods(result);
  //   };
  //   fetchData();
  // }, [axiosSecure]);

  return { foods, isPending, error };
};

export default useFoods;
