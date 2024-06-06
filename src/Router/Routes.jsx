import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EstateDetails from "../Home/EstateDetails";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/public/estate.json')
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/details/:id",
            element: <EstateDetails></EstateDetails>,
            loader: () => fetch('/public/estate.json')
        }
      ]
    },
  ]);

export default Routes;