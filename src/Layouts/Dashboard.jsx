import { BiSolidCalendarStar } from "react-icons/bi";
import { BsFillCalendar2PlusFill } from "react-icons/bs";
import { FaBook, FaHome, FaShoppingCart, FaThList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex gap-5">
      <Helmet>
        <title>Bistro Boss || Dashboard</title>
      </Helmet>

      <div className="w-64 bg-yellow-500 min-h-screen">
        <div className="p-7">
          <ul className="flex flex-col gap-5">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <FaHome size={24} /> Admin Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/addItem"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <FaUtensils size={24} /> Add Item
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/manageItems"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <FaThList size={24} /> Manage Items
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to="/dashboard/manageBookings"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <FaBook size={24} /> Manage Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <FaUsers size={24} /> All User
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/userHome"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <FaHome size={24} /> User Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/reservation"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <FaCalendar size={20} /> Reservation
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/myCart"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <FaShoppingCart size={20} /> My Cart({cart.length})
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <BiSolidCalendarStar size={20} /> Add Review
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/myBookings"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 text-xl text-white font-semibold"
                        : "flex gap-3 font-semibold text-xl text-gray-600"
                    }
                  >
                    <BsFillCalendar2PlusFill size={20} /> My Bookings
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            {/* Shared Links */}

            <li>
              <NavLink
                to="/"
                className="flex items-center gap-3 font-semibold text-xl text-gray-600"
              >
                <FaHome size={24} /> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/ourMenu"
                className="flex items-center gap-3 font-semibold text-xl text-gray-600"
              >
                <MdMenu size={24} /> Menu
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/order/salad"
                className="flex items-center gap-3 font-semibold text-xl text-gray-600"
              >
                <HiShoppingBag size={24} /> Shop
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
