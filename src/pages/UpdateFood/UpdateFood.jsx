import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateFood = () => {
  const loadData = useLoaderData() || {};
  const food = loadData.data;
  // console.log(food);
  const { user } = useAuth() || {};
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // reset,
    setValue,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const {
    food_name,
    photo_url,
    donator_name,
    donator_image,
    expired_date,
    food_quantity,
    pickup_location,
    notes,
    food_status,
    _id,
  } = food || {};

  useEffect(() => {
    setValue("food_status", `${food_status}`);
  }, [food_status, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    const food = {
      food_name: data.food_name,
      photo_url: data.photo,
      donator_name: data.donator_name,
      donator_image: data.donator_image,
      expired_date: new Date(data.expired_date),
      food_quantity: data.food_quantity,
      pickup_location: data.pickup_location,
      notes: data.notes,
      food_status: data.food_status,
    };

    const updateData = async () => {
      const res = await axiosSecure.patch(`/updateFood/${_id}`, food);
      // console.log(res.data);
      if (res.data.modifiedCount === 0) {
        return toast.error("please update any filed first!", {
          position: "top-center",
        });
      }
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          title: `Well Done ${user?.providerData[0]?.displayName}`,
          text: "Your Food Updated SuccessFully!",
          icon: "success",
        });
        navigate("/manageFood");
      }
    };

    updateData();
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10">
        This is Update Food: {food_name}
      </h2>
      <div>
        <form
          //   data-aos="zoom-in"
          //   data-aos-duration="1800"
          onSubmit={handleSubmit(onSubmit)}
          className="card-body py-5"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
            {/* food name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Food Name*</span>
              </label>
              <input
                type="text"
                placeholder="enter food name"
                defaultValue={food_name}
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("food_name", {
                  required: "food_name is required",
                  minLength: {
                    value: 3,
                    message: "food_name should be at least 3 character",
                  },
                  maxLength: {
                    value: 30,
                    message: "food_name should be 20 character maximum",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z]).+$/,
                    message:
                      "food_name has one Upper case or one Lower case letter",
                  },
                })}
              />

              {errors?.food_name && (
                <span className="text-red-600 font-semibold">
                  {errors.food_name.message}
                </span>
              )}
            </div>
            {/* food image  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Food Image*</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
                defaultValue={photo_url}
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("photo", {
                  required: "photo url is required",
                })}
              />
              {errors?.photo && (
                <span className="text-red-600 font-semibold">
                  {errors.photo.message}
                </span>
              )}
            </div>

            {/* Food Quantity  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Food Quantity*</span>
              </label>
              <input
                type="number"
                placeholder="enter food quantity"
                defaultValue={food_quantity}
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("food_quantity", {
                  required: "food_quantity is required",
                })}
              />

              {errors?.food_quantity && (
                <span className="text-red-600 font-semibold">
                  {errors.food_quantity.message}
                </span>
              )}
            </div>

            {/* Pickup Location  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Pickup Location*</span>
              </label>
              <input
                type="text"
                placeholder="enter pickup location"
                defaultValue={pickup_location}
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("pickup_location", {
                  required: "pickup_location is required",
                })}
              />

              {errors?.pickup_location && (
                <span className="text-red-600 font-semibold">
                  {errors.pickup_location.message}
                </span>
              )}
            </div>

            {/* Expired Date/Time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Expired Date/Time*</span>
              </label>
              <input
                type="text"
                defaultValue={expired_date?.split("T")[0]}
                placeholder="YY-MM-DD"
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("expired_date", {
                  required: "expired_date is required",
                  pattern: {
                    value:
                      /^(?:(?:19|20)\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                    message: "enter valid date example: 2024-05-12",
                  },
                })}
              />

              {errors?.expired_date && (
                <span className="text-red-600 font-semibold">
                  {errors.expired_date.message}
                </span>
              )}
            </div>

            {/* Donator Name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Donator Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                defaultValue={donator_name}
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("donator_name", {
                  required: "donator_name is field focus first",
                  minLength: {
                    value: 3,
                    message: "donator_name should be at least 3 character",
                  },
                  maxLength: {
                    value: 30,
                    message: "donator_name should be 20 character maximum",
                  },
                  pattern: {
                    value: /^(?=.*[a-zA-Z]).+$/,
                    message:
                      "donator_name has one Upper case or one Lower case letter",
                  },
                })}
              />

              {errors?.donator_name && (
                <span className="text-red-600 font-semibold">
                  {errors.donator_name.message}
                </span>
              )}
            </div>

            {/* Donator Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Donator Image*</span>
              </label>
              <input
                type="text"
                placeholder="enter your image url"
                defaultValue={donator_image}
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("donator_image", {
                  required: "donator_image required",
                })}
              />

              {errors?.donator_image && (
                <span className="text-red-600 font-semibold">
                  {errors.donator_image.message}
                </span>
              )}
            </div>

            {/* Food Status */}
            <div className="form-control">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-md">Food Status*</span>
                </div>
                <select
                  className="select  select-bordered w-full focus:border-[#84d814] focus:outline-none"
                  {...register("food_status", {
                    required: true,
                  })}
                >
                  <option
                    className="text-lg font-bold"
                    value={`${food_status}`}
                  >
                    {food_status}
                  </option>
                </select>
                {errors?.food_status && (
                  <span className="text-red-600 font-semibold">
                    {errors.food_status.message}
                  </span>
                )}
              </label>
            </div>

            {/* Additional Notes */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Additional Notes*</span>
              </label>
              <textarea
                type="text-area"
                placeholder="Additional Notes"
                defaultValue={notes}
                className="textarea focus:border-[#84d814] input-bordered focus:outline-none"
                {...register("notes", {
                  required: "notes is required",
                  minLength: {
                    value: 15,
                    message: "notes should be at least 15character",
                  },
                  maxLength: {
                    value: 400,
                    message: "notes should be 400 character maximum",
                  },
                })}
              />

              {errors?.notes && (
                <span className="text-red-600 font-semibold">
                  {errors.notes.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-control mt-5">
            <button className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#84d814] inline-block border-[1px] border-[#84d814]">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#84d814] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white font-bold">
                UPDATE FOOD
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
