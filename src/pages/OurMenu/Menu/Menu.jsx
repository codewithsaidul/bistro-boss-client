import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import MenuCover from '../../../assets/menu/banner3.jpg'


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>

      <div>
        <Cover img={MenuCover} title={"our menu"} description={'Would you like to try a dish?'}/>

      </div>
    </div>
  );
};

export default Menu;
