import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Wishlist from "../pages/Wishlist";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import ShoppingCart from "../pages/ShoppingCart";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";
import SellingMadeSimple from "../pages/SellingMadeSimple";
import NewArrival from "../pages/NewArrival";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        index: true,
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        index: true,
        path: "/new-arrival",
        element: <NewArrival />,
      },
      {
        index: true,
        path: "/shop",
        element: <Shop/>,
      },
      {
        index: true,
        path: "/contact",
        element: <Contact />,
      },
      {
        index: true,
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        index: true,
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        index: true,
        path: "/checkout",
        element: <Checkout />,
      },
      {
        index: true,
        path: "/profile",
        element: <Profile />,
      },
      {
        index: true,
        path: "/selling-made-simple",
        element: <SellingMadeSimple />,
      },
      
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
