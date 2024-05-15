import { Button } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
    notes,
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
      <Helmet>
        <title>{`JR-Botanica | ${food_name} details`}</title>
      </Helmet>
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex gap-6 ">
          <div className="image-container">
            <img src={photo_url} alt="food_image" />
          </div>
          <div>
            <p className="text-center text-3xl font-bold">Donor Information</p>
            <ul className="mt-6 space-y-3">
              <li className="text-[20px]">Donor Name:{donator_name}</li>
              <li className="text-[20px]">
                pickup Location: {pickup_location}
              </li>
            </ul>
            <div className="border-[1px] border-gray-600 border-solid h-[1px] my-10"></div>
            <div>
              <p className="text-center text-3xl font-bold">Food Information</p>
              <ul className="space-y-3 list-disc mt-8">
                <li className="text-[20px]">food name:{food_name}</li>
                <li className="text-[20px]">food quantity:{food_quantity}</li>
                <li className="text-[20px]">
                  Expire Date: {expired_date.split("T")[0]}
                </li>
                <li className="text-[20px]">Description: {notes}</li>
              </ul>
            </div>
            <div className="mt-5">
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
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
