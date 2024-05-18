import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionCover from "../../../components/SectionCover/SectionCover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && (
        <SectionCover
          img={img}
          title={title}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      )}

      <div className="max-w-screen-xl mx-auto px-5 md:px-0 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {items.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>

        <div className="flex justify-center mt-7">
          <Link
            to={`/order/${title}`}
          className="text-xl text-black font-medium border-b-4 px-5 py-2 border-[#1F2937] text-center rounded-lg"
          >
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
