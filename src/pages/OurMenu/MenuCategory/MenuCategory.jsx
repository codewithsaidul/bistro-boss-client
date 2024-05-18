
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import SectionCover from "../../../components/SectionCover/SectionCover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <SectionCover img={img} title={title} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} /> }

      <div className=" max-w-screen-xl mx-auto px-5 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
            {items.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default MenuCategory;
