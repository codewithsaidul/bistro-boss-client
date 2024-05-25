import { RiDeleteBinLine } from "react-icons/ri"
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";


const ManageItems = () => {


    const axiosSecure = useAxiosSecure();

    const [menu, refetch] = useMenu();

  
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
            const { data } = await axiosSecure.delete(`/menu/${id}`);
  
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Item Deleted!.",
                icon: "success"
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


  return (
    <div>
    <div className="mt-10">
      <SectionTitle subHeading={"Hurry Up!"} heading={"MANAGE ALL ITEMS"} />
    </div>

    <div className="w-[90%] mx-auto shadow-lg p-10">
      <div className="flex justify-between">
        <h2 className="text-3xl text-[#151515] font-bold uppercase">
          Total Items: {menu.length}
        </h2>
      </div>

      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-lg">
              <tr>
                <th className="text-base font-semibold">#</th>
                <th className="text-base font-semibold">ITEM IMAGE</th>
                <th className="text-base font-semibold">ITEM NAME</th>
                <th className="text-base font-semibold">PRICE</th>
                <th className="text-base font-semibold">ACTION</th>
                <th className="text-base font-semibold">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-20  h-20 rounded-lg"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>


                
                  <td
                    onClick={() => handleDelete(item._id)}
                    
                  >
                    <button className="p-2 text-white rounded-md flex justify-center w-10 bg-[#D1A054]">
                      <FaEdit size={24} />
                    </button>
                  </td>


                  <td
                    onClick={() => handleDelete(item._id)}
                    
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
  )
}

export default ManageItems