import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Bistro Boss || Home</title>
        </Helmet>
      </div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
