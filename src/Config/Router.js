import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "../Viwes/Home";
import Details from "../Viwes/Detail/Detail";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/details/:adId",
      element: <Details/>,
    },
  ]);

  function Router(){
    return<RouterProvider router={router} />
  }

  export default Router;