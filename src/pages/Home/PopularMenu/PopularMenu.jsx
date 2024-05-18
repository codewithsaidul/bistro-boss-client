
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {


  const [menu] = useMenu()

  const popularMenu = menu.filter((item) => item.category === "popular");




  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-0 my-20">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
