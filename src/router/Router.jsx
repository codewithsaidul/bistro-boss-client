
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/OurMenu/Menu/Menu";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/ourMenu',
            element: <Menu/>
        }
      ]
    },
]);



export default router