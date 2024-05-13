import { Button } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RequestForm from "../RequestForm/RequestForm";
import Loader from "./../../components/Loader";

const FoodDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  //   console.log(id);
  const { data: food, isPending } = useQuery({
    queryKey: ["id", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/food/${id}`);
      return res?.data;
    },
  });
  //   console.log(food);

  const {
    expired_date,
    food_name,
    food_quantity,
    photo_url,
    pickup_location,
    donator_name,
  } = food || {};

  let [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  //   console.log(isOpen);
  return (
    <div>
      {isPending ? (
        <Loader />
      ) : (
        <div>
          <p>Donor Information</p>
          <ul>
            <li>Donor Name:{donator_name}</li>
            <li>pickup Location: {pickup_location}</li>
          </ul>

          <div>
            <p>single food section</p>
            <ul>
              <li>food_photo:{photo_url}</li>
              <li>food name:{food_name}</li>
              <li>food quantity:{food_quantity}</li>
              <li>{expired_date}</li>
            </ul>
          </div>
        </div>
      )}
      <div>
        <Button onClick={() => open()} className="btn">
          REQUEST
        </Button>
        {isOpen && (
          <RequestForm
            food={food}
            close={close}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
