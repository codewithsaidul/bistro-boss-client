import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Order.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";


const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();

    const drinks = menu.filter((item) => item.category === "drinks");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");

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
            <OrderTab items={salad}/>
          </TabPanel>

          <TabPanel>
            <OrderTab items={pizza}/>
          </TabPanel>

          <TabPanel>
            <OrderTab items={soup}/>
          </TabPanel>

          <TabPanel>
            <OrderTab items={dessert}/>
          </TabPanel>

          <TabPanel>
            <OrderTab items={drinks}/>
          </TabPanel>
          
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
