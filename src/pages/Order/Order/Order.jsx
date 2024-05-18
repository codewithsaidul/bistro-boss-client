import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Order.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();

  //   const offered = menu.filter((item) => item.category === "offered");
  //   const dessert = menu.filter((item) => item.category === "dessert");
  //   const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  //   const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover
        img={orderImg}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      />

      <div className="max-w-screen-xl mx-auto px-5 md:px-0 mb-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div>
            <TabList className="my-16 flex justify-center ">
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Desserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10 px-4 md:px-0">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
