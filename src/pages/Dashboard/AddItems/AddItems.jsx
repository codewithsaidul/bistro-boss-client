import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const AddItems = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleAddItems = async (menu) => {

    //  Image Upload on ImageBB & Get The Image URL
    const imageFile = new FormData();
    const image = menu.image[0]
    imageFile.append( "image", image);
    const { data } = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=c18ec73d47072ea586f1ea5b99af2c03`, imageFile, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });


    if (data.success) {
      // Now Send The Menu Item Data With The Image URL
      const menuItem = {
        name: menu.name,
        recipe: menu.description,
        image: data.data.display_url,
        category: menu.category,
        price: parseFloat(menu.price),
      };
      

      try {
        const { data } = await axiosSecure.post("/menu", menuItem);

        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item Added Successfully!!",
            showConfirmButton: false,
            timer: 1500
          });
  
        }
      } catch (error) {
        console.log(error.message);
      }
    }
};

  return (
    <div className="px-10">
      <div className="my-10">
        <SectionTitle subHeading={"What's new?"} heading={"ADD AN ITEM"} />
      </div>

      <div className=" bg-[#F3F3F3] w-full">
        <form onSubmit={handleSubmit(handleAddItems)} className="p-10">
          <div className="grid grid-cols-12 gap-7">
            {/* Recipe Name */}
            <div className="col-span-12">
              <label>Recipe Name*</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full rounded-lg text-xl text-[#A1A1A1] mt-2 border border-[#E8E8E8] py-2 px-5 outline-none"
                placeholder="Recipe Name"
              />
              {errors.name && (
                <p className="text-red-500 font-semibold">Name is Required</p>
              )}
            </div>

            {/* Recipe Name */}
            <div className="col-span-12 md:col-span-6">
              <label>Category*</label>
              <select
                {...register("category", { required: true })}
                defaultValue="default"
                className="w-full rounded-lg text-xl text-[#A1A1A1] mt-2 border border-[#E8E8E8] py-2 px-5 outline-none"
              >
                <option value="default" disabled>
                  Category
                </option>
                <option value="popular">Popular</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
              </select>

              {errors.category && (
                <p className="text-red-500 font-semibold">
                  Category is Required
                </p>
              )}
            </div>

            {/* Recipe Price */}
            <div className="col-span-12 md:col-span-6">
              <label>Price*</label>
              <input
                type="text"
                {...register("price", { required: true })}
                className="w-full rounded-lg text-xl text-[#A1A1A1] mt-2 border border-[#E8E8E8] py-2 px-5 outline-none"
                placeholder="Price"
              />

              {errors.price && (
                <p className="text-red-500 font-semibold">Price is Required</p>
              )}
            </div>

            {/* Recipe Description */}
            <div className="col-span-12">
              <label>Recipe Description*</label>
              <textarea
                {...register("description", { required: true })}
                className="w-full h-32 resize-none rounded-lg text-xl text-[#A1A1A1] mt-2 border border-[#E8E8E8] py-2 px-5 outline-none"
                placeholder="Recipe Description"
              ></textarea>

              {errors.description && (
                <p className="text-red-500 font-semibold">
                  Description is Required
                </p>
              )}
            </div>

            <div className="col-span-12">
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full"
              />

              {errors.image && (
                <p className="text-red-500 font-semibold">Image is Required</p>
              )}
            </div>
          </div>

          <input
            type="submit"
            value={"Add Item"}
            className="py-3 px-7 text-white text-xl font-semibold rounded-xl mt-5 bg-yellow-600"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
