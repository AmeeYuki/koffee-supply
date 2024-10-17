import { createBrowserRouter } from "react-router-dom";
import Loadable from "./Loadable";
import MainLayout from "../layout/MainLayout";
import LayoutStaff from "../layout/LayoutStaff";
import AuthGuard from "./AuthGuard";

const Login = Loadable({ loader: () => import("../pages/login/Login") });
const OrderManage = Loadable({
  loader: () => import("../pages/admin/OrderManage"),
});
const ProductManage = Loadable({
  loader: () => import("../pages/admin/ProductManage"),
});
const Dashboard = Loadable({
  loader: () => import("../pages/admin/Dashboard"),
});
const Home = Loadable({ loader: () => import("../pages/home/Home") });
const Product = Loadable({ loader: () => import("../pages/product/Product") });
const ProductDetail = Loadable({
  loader: () => import("../pages/productDetail/ProductDetail"),
});
const OrderForm = Loadable({
  loader: () => import("../pages/order/OrderForm"),
});
const DIYKoffe = Loadable({
  loader: () => import("../pages/DIYKoffe/DIYKoffe"),
});

export const router = createBrowserRouter([
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
            path: "order-form",
            element: OrderForm,
          },
          {
            path: "product_detail/:id",
            element: ProductDetail,
          },

          {
            path: "/login",
            element: Login,
          },
        ],
      },
      {
        element: <LayoutStaff />,
        children: [
          {
            path: "/dashboard-ad-ame",
            element: Dashboard,
          },
          {
            path: "/product-manage-ad-ame",
            element: ProductManage,
          },
          {
            path: "/order-manage-ad-ame",
            element: OrderManage,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>404</h1>
        <h3>Page not found</h3>
      </div>
    ),
  },
]);
