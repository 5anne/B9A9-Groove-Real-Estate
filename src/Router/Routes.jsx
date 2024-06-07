import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EstateDetails from "../Home/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import About from "../Home/About";
import Contact from "../Home/Contact";
import Blog from "../Home/Blog";
import Profile from "../Home/Profile";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('/public/estate.json')
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
        loader: () => fetch('/public/blog.json')
      },
      {
        path: "/user_profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      }
    ]
  },
]);

export default Routes;