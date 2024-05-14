import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropType from "prop-types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RequestForm = ({ close, isOpen, food }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    donator_name,
    pickup_location,
    photo_url,
    food_name,
    // food_quantity,
    expired_date,
    _id,
    donator_email,
    notes,
    food_status,
    requested_user,
  } = food;
  const {
    handleSubmit,
    register,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const { notes } = data;
    const date = new Date();
    const updateValue = {
      notes: notes,
      request_date: date,
      food_status: "requested",
      request_user: user?.email,
    };
    const handleRequestFood = async () => {
      const res = await axiosSecure.patch(`/food/${_id}`, updateValue);
      // console.log(res.data);
      const result = res.data;
      if (result.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Request complete for this Food",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };

    if (donator_email === user?.email) {
      return toast.error(
        "sorry you cannot request this food!  cause you are the donor of this food",
        {
          position: "top-center",
        }
      );
    }
    if (requested_user === user?.email && food_status === "requested") {
      return toast.error("sorry you already requested this food!");
    }
    if (donator_email !== user?.email) {
      handleRequestFood();
    }
  };

  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full  rounded-xl  bg-slate-300 p-6 backdrop-blur-2xl">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white text-center"
                >
                  Request Form
                </DialogTitle>
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body py-5"
                  >
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
                      {/* Food Name */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">Food Name*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="enter food name"
                          defaultValue={food_name}
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("food_name")}
                        />
                        {errors?.food_name && (
                          <span className="text-red-600 font-semibold">
                            {errors.food_name.message}
                          </span>
                        )}
                      </div>
                      {/* Food image */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">
                            Food Image*
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="enter food name"
                          defaultValue={photo_url}
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("photo_url")}
                        />
                        {errors?.photo_url && (
                          <span className="text-red-600 font-semibold">
                            {errors.photo_url.message}
                          </span>
                        )}
                      </div>
                      {/* Food ID */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">Food ID*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="enter food name"
                          defaultValue={_id}
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("food_id")}
                        />
                        {errors?.food_id && (
                          <span className="text-red-600 font-semibold">
                            {errors.food_id.message}
                          </span>
                        )}
                      </div>
                      {/* Donator Email */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">
                            Donator Email*
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="enter food name"
                          defaultValue={donator_email}
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("donator_email")}
                        />
                        {errors?.donator_email && (
                          <span className="text-red-600 font-semibold">
                            {errors.donator_email.message}
                          </span>
                        )}
                      </div>
                      {/* Donator Name */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">
                            Food Donator Name*
                          </span>
                        </label>
                        <input
                          type="text"
                          defaultValue={donator_name}
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("donator_name")}
                        />
                        {errors?.donator_name && (
                          <span className="text-red-600 font-semibold">
                            {errors.donator_name.message}
                          </span>
                        )}
                      </div>
                      {/* Food Requested mail by user */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">
                            User Email*
                          </span>
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.email}
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("user_email")}
                        />
                        {errors?.user_email && (
                          <span className="text-red-600 font-semibold">
                            {errors.user_email.message}
                          </span>
                        )}
                      </div>
                      {/* Requested Date */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">
                            Request Date*
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="enter food name"
                          defaultValue={new Date().toISOString().split("T")[0]}
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("req_date")}
                        />
                        {errors?.req_date && (
                          <span className="text-red-600 font-semibold">
                            {errors.req_date.message}
                          </span>
                        )}
                      </div>
                      {/* Pickup Location */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">
                            Pickup Location*
                          </span>
                        </label>
                        <input
                          type="text"
                          defaultValue={pickup_location}
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("pickup_location")}
                        />
                        {errors?.pickup_location && (
                          <span className="text-red-600 font-semibold">
                            {errors.pickup_location.message}
                          </span>
                        )}
                      </div>
                      {/* expired Date */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">
                            Expired Date*
                          </span>
                        </label>
                        <input
                          type="text"
                          defaultValue={
                            new Date(expired_date).toISOString().split("T")[0]
                          }
                          disabled
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("expired_date")}
                        />
                        {errors?.expired_date && (
                          <span className="text-red-600 font-semibold">
                            {errors.expired_date.message}
                          </span>
                        )}
                      </div>
                      {/* Additional Notes */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-md">
                            Additional Notes*
                          </span>
                        </label>
                        <input
                          type="text"
                          defaultValue={notes}
                          className="input input-bordered focus:border-[#84d814] focus:outline-none w-full"
                          {...register("notes")}
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
                          Request
                        </span>
                      </button>
                    </div>
                  </form>
                  <div className="mt-4 mx-auto">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

RequestForm.propTypes = {
  food: PropType.object.isRequired,
  close: PropType.func.isRequired,
  isOpen: PropType.bool.isRequired,
};

export default RequestForm;
