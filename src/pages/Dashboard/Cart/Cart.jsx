import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {


  const axiosSecure = useAxiosSecure();

  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
          const { data } = await axiosSecure.delete(`/carts/${id}`);

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
        <SectionTitle subHeading={"My Car"} heading={"WANNA ADD MORE?"} />
      </div>

      <div className="w-[90%] mx-auto shadow-lg p-10">
        <div className="flex justify-between">
          <h2 className="text-3xl text-[#151515] font-bold uppercase">
            Total orders: {cart.length}
          </h2>
          <h2 className="text-3xl text-[#151515] font-bold uppercase">
            total price: ${totalPrice}
          </h2>
          <button className="text-xl text-white font-semibold py-2 px-5 bg-[#D1A054] rounded-xl">
            Pay
          </button>
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
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
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

export default Cart;
