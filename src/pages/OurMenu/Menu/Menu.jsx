import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import MenuCover from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import MenuCategory from "../MenuCategory/MenuCategory";
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {


  const [menu] = useMenu()

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");


  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>

      <div>
        <Cover img={MenuCover} title={"our menu"} description={'Would you like to try a dish?'}/>

        <div className="mt-20">
          <SectionTitle subHeading='Don&apos;t miss' heading='TODAY&apos;S OFFER'/>

          {/* Offered */}
          <MenuCategory items={offered}/>

          {/* Desserts */}
          <MenuCategory items={dessert} title={'dessert'} img={desertImg}/>

          {/* Pizza */}
          <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}/>

          {/* SALADS */}
          <MenuCategory items={salad} title={'salad'} img={saladImg}/>

          {/* Soup */}
          <MenuCategory items={soup} title={'soup'} img={soupImg}/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
