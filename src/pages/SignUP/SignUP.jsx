import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router-dom";

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, name, password, photo } = data;
    console.log(email, name, password, photo);
    // createUser(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     setError(" ");
    //     if (user) {
    //       updateUser(name, photo).then(() => {
    //         Swal.fire({
    //           title: "Good job!",
    //           text: "User Create Successfully. Login Now!",
    //           icon: "success",
    //         });
    //         logOut()
    //           .then(() => {})
    //           .catch((error) => {
    //             console.log(error?.message);
    //           });
    //         navigate("/login");
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     setError(error?.message);
    //   });
  };
  return (
    <div className="flex flex-col justify-center items-center  md:flex-row md:justify-between gap-6 md:items-center">
      <div>
        <img
          src="https://i.ibb.co/GtKtr8R/healthy-food.png"
          className="object-cover "
          alt="register image"
        />
      </div>
      <div className="card shrink-0 md:w-6/12 w-3/4 shadow-2xl bg-base-100">
        <h2 className="md:text-3xl text-xl text-center pt-6">
          Please <span className="text-[#84d814]">Register</span> Here
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body py-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered focus:border-[#84d814] focus:outline-none"
              {...register("name", {
                required: "name is required",
                minLength: {
                  value: 3,
                  message: "name should be at least 3 character",
                },
                maxLength: {
                  value: 20,
                  message: "name should be 20 character maximum",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z]).+$/,
                  message: "name has one Upper case or one Lower case letter",
                },
              })}
            />

            {errors?.name && (
              <span className="text-red-600 font-semibold">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered focus:border-[#84d814] focus:outline-none"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "example@gmail.com",
                },
              })}
            />
            {errors?.email && (
              <span className="text-red-600 font-semibold">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Photo URL</span>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text text-md">Password</span>
            </label>
            <div className="relative w-full">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                className="input input-bordered w-full focus:border-[#84d814] focus:outline-none"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password should be 6 character long",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    message:
                      "password contain at least one Upper case and one Lower case letter",
                  },
                })}
              />
              {!showPassword ? (
                <LuEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer"
                  size={30}
                  fill="#84d814"
                />
              ) : (
                <LuEyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer"
                  size={30}
                  fill="#84d814"
                />
              )}
            </div>
            {errors?.password && (
              <span className="text-red-600 font-semibold">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="form-control mt-5">
            <button className="md:px-5 px-2 md:py-2 py-1 relative rounded  group overflow-hidden font-medium bg-[#014f2c] text-white inline-block border-[#84d814]  border-[1px] ">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#84d814]  group-hover:h-full opacity-90 "></span>
              <span className="relative group-hover:text-white font-bold">
                Register
              </span>
            </button>
          </div>
        </form>
        {error && <span className="text-red-600 font-bold">{error}</span>}
        <p className="text-center text-md py-3">
          Already have an account?{" "}
          <span className="text-[#84d814] underline">
            <Link to="/login">Please Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUP;
