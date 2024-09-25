import { createBrowserRouter } from "react-router-dom";
import Loadable from "./Loadable";
import MainLayout from "../layout/MainLayout";
import AuthGuard from "./AuthGuard";

const Login = Loadable({ loader: () => import("../pages/login/Login") });
const Home = Loadable({ loader: () => import("../pages/home/Home") });
const Product = Loadable({ loader: () => import("../pages/product/Product") });
const ProductDetail = Loadable({
  loader: () => import("../pages/productDetail/ProductDetail"),
});
const CartFinal = Loadable({
  loader: () => import("../pages/cart/CartFinal"),
});
const DIYKoffe = Loadable({
  loader: () => import("../pages/DIYKoffe/DIYKoffe"),
});

export const router = createBrowserRouter([
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/",
    element: <AuthGuard />,

    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            path: "",
            element: Home,
          },
          {
            path: "products",
            element: Product,
          },
          {
            path: "diy_Koffe",
            element: DIYKoffe,
          },
          {
            path: "cart_final",
            element: CartFinal,
          },
          {
            path: "product_detail",
            element: ProductDetail,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <div>ERROR</div>,
  },
]);
