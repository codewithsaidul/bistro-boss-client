import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosSecure.delete(`/users/${id}`);

          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User Deleted!.",
              icon: "success",
            });

            // Update The Ui
            refetch();
          }
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleMakeAdmin = async (user) => {
    try {
      const { data } = await axiosSecure.patch(`/users/admin/${user._id}`);

      if (data.modifiedCount > 0) {

        refetch()

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} Is An Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="mt-10">
        <SectionTitle subHeading={"How many??"} heading={"MANAGE ALL USERS"} />
      </div>

      <div className="w-[90%] mx-auto shadow-lg p-10">
        <div className="flex justify-between">
          <h2 className="text-3xl text-[#151515] font-bold uppercase">
            Total users: {users.length}
          </h2>
        </div>

        <div className="mt-6">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-white rounded-lg">
                <tr>
                  <th className="text-base font-semibold uppercase"></th>
                  <th className="text-base font-semibold uppercase">NAME</th>
                  <th className="text-base font-semibold uppercase">Email</th>
                  <th className="text-base font-semibold uppercase">Role</th>
                  <th className="text-base font-semibold uppercase">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>

                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="p-2 text-white rounded-md flex justify-center w-10 bg-[#D1A054]"
                        >
                          <FaUsers size={24} />
                        </button>
                      )}
                    </td>

                    <td
                      onClick={() => handleDelete(user._id)}
                      className="flex justify-center"
                    >
                      <button className="p-2 text-white rounded-md flex justify-center w-10 bg-red-500">
                        <RiDeleteBinLine size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
