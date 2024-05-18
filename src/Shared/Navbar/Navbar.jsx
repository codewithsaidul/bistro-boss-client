
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = () => {


  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] text-xl font-extrabold uppercase"
              : "text-[#FFFFFF] text-xl font-extrabold uppercase"
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
              ? "text-[#EEFF25] text-xl font-extrabold uppercase"
              : "text-[#FFFFFF] text-xl font-extrabold uppercase"
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
              ? "text-[#EEFF25] text-xl font-extrabold uppercase"
              : "text-[#FFFFFF] text-xl font-extrabold uppercase"
          }
        >
          our menu
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/order/SALAD"
          className={({ isActive }) =>
            isActive
              ? "text-[#EEFF25] text-xl font-extrabold uppercase"
              : "text-[#FFFFFF] text-xl font-extrabold uppercase"
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
         
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>

        <div className="navbar-end">
          
          <div className="hidden lg:flex mr-10">
            <ul className="flex gap-8 px-1">{navOptions}</ul>
          </div>
          <a className="btn">Button</a>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="px-2 text-white font-extrabold lg:hidden">
              <CiMenuFries size={24} />
            </div>
            <ul
              tabIndex={0}
              className="right-0 text-center dropdown-content mt-3 z-[1] p-5 shadow bg-black bg-opacity-50 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
