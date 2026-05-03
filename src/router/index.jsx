import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import { getProducts, getProductById } from "../api/products";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductList />,
        loader: getProducts
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        loader: getProductById
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

export default router;
