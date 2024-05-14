import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddFood = () => {
  const { user } = useAuth() || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const {
      expired_date,
      food_name,
      food_quantity,
      food_status,
      notes,
      photo,
      pickup_location,
    } = data;

    const food = {
      donator_email: user?.email || user?.providerData[0]?.email,
      expired_date: new Date(expired_date),
      food_name: food_name,
      food_quantity: food_quantity,
      food_status: food_status,
      notes: notes,
      photo_url: photo,
      pickup_location: pickup_location,
      donator_image: user?.providerData[0]?.photoURL || user?.photoURL,
      donator_name: user?.providerData[0]?.displayName || user?.displayName,
    };
    console.log(food);

    const postData = async () => {
      const res = await axios.post(`http://localhost:5000/addFood`, food);
      const result = await res.data;
      console.log(result);
      if (result.insertedId) {
        Swal.fire({
          title: `Well Done ${user?.providerData[0]?.displayName}`,
          text: "Your Food Added SuccessFully!",
          icon: "success",
        });
        reset();
      }
    };
    postData();
  };
  return (
    <div className="lg:mt-[30px]">
      <Helmet>
        <title>JR-Botanica | addFood</title>
      </Helmet>

      <div className="card shrink-0 md:w-full  mx-0 bg-base-100">
        <h2 className="text-center text-4xl font-bold py-[50px]">
          Here <span className="text-[#84d814]">Add</span> Food
        </h2>
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
                type="date"
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("expired_date", {
                  required: "expired_date is required",
                })}
              />

              {errors?.expired_date && (
                <span className="text-red-600 font-semibold">
                  {errors.expired_date.message}
                </span>
              )}
            </div>
            {/* Donator Email */}
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Donator Email*</span>
              </label>
              <input
                type="email"
                placeholder="enter email"
                defaultValue={user?.email}
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("donator_email", {
                  required: "donator_email field focus first",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "example@gmail.com",
                  },
                })}
              />
              {errors?.donator_email && (
                <span className="text-red-600 font-semibold">
                  {errors.donator_email.message}
                </span>
              )}
              {emailError && (
                <span className="text-red-600 font-bold">{emailError}</span>
              )}
            </div> */}

            {/* Donator Name */}
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Donator Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                defaultValue={user?.displayName}
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
              {nameError && (
                <span className="text-red-600 font-bold">{nameError}</span>
              )}
            </div> */}

            {/* Donator Image */}
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Donator Image*</span>
              </label>
              <input
                type="text"
                placeholder="enter your image url"
                defaultValue={user?.photoURL}
                className="input input-bordered focus:border-[#84d814] focus:outline-none"
                {...register("donator_image", {
                  required: "donator_image field focus first",
                })}
              />

              {errors?.donator_image && (
                <span className="text-red-600 font-semibold">
                  {errors.donator_image.message}
                </span>
              )}
              {imageError && (
                <span className="text-red-600 font-bold">{imageError}</span>
              )}
            </div> */}

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
                  <option className="text-lg font-bold" value="">
                    Food Status
                  </option>
                  <option className="text-lg" value="available">
                    available
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
                className="textarea focus:border-[#84d814] input-bordered focus:outline-none"
                {...register("notes", {
                  required: "notes is required",
                  minLength: {
                    value: 10,
                    message: "notes should be at least 10 character",
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
                ADD Food
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
