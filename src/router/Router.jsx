import { createBrowserRouter  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            index: true,
            element: <Home/>
        }
      ]
    },
]);



export default router