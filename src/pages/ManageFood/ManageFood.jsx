import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FoodRow from "./FoodRow";

const ManageFood = () => {
  const { user } = useAuth() || {};
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const url = `${import.meta.env.VITE_URL}/userFoods?email=${user?.email}`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosSecure.get(url);
      if (res.data) {
        setFoods(res.data);
      }
    };
    fetchData();
  }, [axiosSecure, url]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to back this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#84d814",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFood();
      }
    });
    const deleteFood = async () => {
      const res = await axiosSecure.delete(`/deleteFood/${id}`);
      //   console.log(res.data);
      if (res.data.deletedCount === 1) {
        const remainingFoods = foods.filter((food) => food._id !== id);
        setFoods(remainingFoods);
        Swal.fire({
          title: "Deleted!",
          text: "This Food has been deleted.",
          icon: "success",
        });
      }
    };
    // console.log(`handle delete amre click marse${id}`);
  };

  return (
    <div>
      <Helmet>
        <title>JR-Botanica | ManageFood</title>
      </Helmet>
      <h2 className="text-center text-4xl font-bold my-10">
        All Food Manage Here
      </h2>

      <div className="mt-[50px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Food Name</th>
                <th>Food Image</th>
                <th>Food Quantity</th>
                <th>Donor Name</th>
                <th>Expire Date</th>
                <th>Manage Food</th>
              </tr>
            </thead>
            <tbody>
              {!foods?.length ? (
                <tr>
                  <th></th>
                  <th></th>
                  <th className="font-bold text-center">
                    No Foods Here Please Add Food first
                  </th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              ) : (
                foods?.map((food, i) => (
                  <FoodRow
                    key={food._id}
                    food={food}
                    i={i}
                    handleDelete={handleDelete}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageFood;
