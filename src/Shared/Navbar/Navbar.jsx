import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import userProfile from "../../assets/others/profile.png";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const { user, logOut } = useAuth();

  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  const handleSignOut = () => {
    logOut().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign Out Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] text-lg font-extrabold uppercase"
              : "text-[#FFFFFF] text-lg font-extrabold uppercase"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] text-lg font-extrabold uppercase"
              : "text-[#FFFFFF] text-lg font-extrabold uppercase"
          }
        >
          contact us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/ourMenu"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] text-lg font-extrabold uppercase"
              : "text-[#FFFFFF] text-lg font-extrabold uppercase"
          }
        >
          our menu
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] text-lg font-extrabold uppercase"
              : "text-[#FFFFFF] text-lg font-extrabold uppercase"
          }
        >
          our shop
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-black bg-opacity-40 text-white fixed z-50 top-0 left-0 right-0">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="px-2 text-white font-extrabold lg:hidden"
            >
              <CiMenuFries size={24} />
            </div>
            <ul
              tabIndex={0}
              className="right-0 text-center dropdown-content mt-3 z-[1] p-5 shadow bg-black bg-opacity-50 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>

        <div className="navbar-center">
          <div className="hidden lg:flex mr-10">
            <ul className="flex gap-8 px-1">{navOptions}</ul>
          </div>
        </div>

        <div className="navbar-end">
          {isAdmin ? (
            <Link to="/dashboard/allUsers">
                <button className="text-xl font-bold text-white mr-5">
                    Dashboard
                </button>
            </Link>
          ) : (
            <Link to="/dashboard/myCart">
              <div className="mr-5 relative">
                <p>
                  <FaCartShopping className="text-[#EEFF25]" size={24} />
                </p>

                <span className="absolute bottom-4 left-3 rounded-full text-white font-bold">
                  {cart.length}
                </span>
              </div>
            </Link>
          )}

          {user ? (
            <div>
              {" "}
              <div>
                <figure onClick={() => setDropDown(!dropDown)}>
                  <img
                    title={user?.displayName}
                    className="w-10 h-10 rounded-full"
                    src={userProfile}
                    alt="user imge"
                  />
                </figure>

                {dropDown && (
                  <div
                    onClick={handleSignOut}
                    className="absolute bg-base-300 right-2 text-black p-3 top-16"
                  >
                    <button>Log Out</button>
                  </div>
                )}
              </div>{" "}
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
