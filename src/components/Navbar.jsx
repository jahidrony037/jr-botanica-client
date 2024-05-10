import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.svg";
import "./Navbar.css";
const Navbar = () => {
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
          <Link
            to="/login"
            className="md:px-5 px-2 md:py-2 py-1 relative rounded  group overflow-hidden font-medium bg-[#014f2c] text-white inline-block border-[#84d814]  border-[1px] "
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#84d814]  group-hover:h-full opacity-90 "></span>
            <span className="relative group-hover:text-white font-bold">
              Login
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
