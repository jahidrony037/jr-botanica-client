import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import logo from "../../public/logo.svg";
import useAuth from "../hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { logOut, user, isLoading, show, setShow } = useAuth();
  const [theme, setTheme] = useState("corporate");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const getTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", getTheme);
  }, [setTheme, theme]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success(
          `${user?.providerData[0]?.displayName} Logged out Successfully`
        );
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableFoods">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addFood">Add Food</NavLink>
      </li>
      <li>
        <NavLink to="/manageFood">Manage My Food</NavLink>
      </li>
      <li>
        <NavLink to="/foodRequest">My Food Request</NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 sticky top-0 shadow-sm z-10 pl-0">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0 pr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="flex items-center hover:bg-none pl-0">
            <img
              src={logo}
              className="md:w-[156px] w-28 md:h-[45px] h-11 fill-[#014f2c]"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          <div>
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    // console.log(e.target.checked);
                    return setTheme("dark");
                  } else {
                    // console.log(e.target.checked);
                    return setTheme("corporate");
                  }
                }}
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />

              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          {isLoading ? (
            <FadeLoader size={10} color="#84d814" />
          ) : (
            <div>
              {user ? (
                <div>
                  <div
                    className="dropdown dropdown-end"
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn border-[1px] border-[#84d814] hover:bg-[#84d814]  btn-circle avatar"
                    >
                      <div
                        data-tooltip-id="profile-image"
                        data-tooltip-content={`${user?.providerData[0]?.displayName}`}
                        className="w-10 rounded-full"
                      >
                        <img
                          alt="user-photo"
                          src={`${user?.providerData[0]?.photoURL}`}
                        />
                        <Tooltip
                          id="profile-image"
                          className="z-10"
                          style={{ backgroundColor: "#84d814" }}
                        />
                      </div>
                    </div>
                    {!show ? null : (
                      <ul
                        tabIndex={0}
                        className="z-[1] flex flex-col  p-2 shadow bg-base-100 rounded-box absolute right-0 space-y-5"
                      >
                        <li className="w-40">
                          <Link to="" className="flex justify-between text-xs">
                            {user?.providerData[0]?.email}
                          </Link>
                        </li>

                        <li className="w-40">
                          <button
                            onClick={() => handleLogOut()}
                            className="md:px-5 px-2 md:py-2 py-1 relative rounded  group overflow-hidden font-medium bg-[#014f2c] text-white inline-block border-[#84d814]  border-[1px] w-full text-center"
                          >
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#84d814]  group-hover:h-full opacity-90 "></span>
                            <span className="relative group-hover:text-white font-bold">
                              LogOut
                            </span>
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="md:px-5 px-2 md:py-2 py-1 relative rounded  group overflow-hidden font-medium bg-[#014f2c] text-white inline-block border-[#84d814]  border-[1px] "
                >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#84d814]  group-hover:h-full opacity-90 "></span>
                  <span className="relative group-hover:text-white font-bold">
                    Login
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
