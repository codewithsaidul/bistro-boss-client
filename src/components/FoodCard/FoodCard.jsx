import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {

    const { _id, name, recipe, image, price} = item;

    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();
    const [, refetch] = useCart();

    const naviGate = useNavigate()
    const location = useLocation()

    const handleFoodCard = async() => {
      if (user && user?.email) {
        // add to cart
        const cartItem = {
          menuId : _id,
          email: user?.email,
          name, 
          image, 
          price
        }

        try {
          
          const { data } = await axiosSecure.post('/carts', cartItem);


          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} Added To The Cart`,
              showConfirmButton: false,
              timer: 1500
            });


            
            // Updated The Ui 
            refetch();
          }



        } catch (err) {
          console.log(err.message)
        }

      } else {
        Swal.fire({
          title: "You Are Not Sign In",
          text: "Please Sign In First for Add Food On Cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sign In Please!"
        }).then((result) => {
          if (result.isConfirmed) {
           naviGate('/login', { state: location.pathname } )
          }
        });
      }
    }

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-80"
        />
        <p className="text-lg font-semibold text-white py-2 px-4 bg-[#111827] absolute top-10 right-10">${price}</p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={handleFoodCard} className="text-xl text-[#BB8506] font-medium py-3 px-7 bg-[#E8E8E8] border-b-4 rounded-lg border-[#BB8506] hover:bg-[#111827] mt-4 uppercase">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
