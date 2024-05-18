import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      const data = await axios("/menu.json");
      const popularMenu = data.data.filter(
        (item) => item.category === "popular"
      );
      setMenu(popularMenu);
    };

    getMenu();
  }, []);

  return (
    <section className="max-w-screen-lg mx-auto px-4 md:px-0 mb-16">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menus.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
