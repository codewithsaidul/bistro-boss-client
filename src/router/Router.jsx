
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/OurMenu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";




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
        },
        {
            path: '/order/:category',
            element: <PrivateRoute><Order/></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
      ]
    },
]);



export default router