import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import { getProducts, getProductById } from "../api/products";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { protectedLoader, adminLoader } from "../loaders/protectedLoader";
import { publicLoader } from "../loaders/publicLoader";
import AdminPage from "../pages/AdminPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ProductList />,
          loader: getProducts,
        },
        {
          path: "product/:id",
          element: <ProductDetail />,
          loader: getProductById,
        },
        {
          path: "cart",
          element: <Cart />,
          loader: protectedLoader,
        },
        {
          path: "admin",
          element: <AdminPage />,
          loader: adminLoader,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
      loader: publicLoader,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ],
  { basename: "/ccwe1-app-hook-form/" },
);

export default router;
