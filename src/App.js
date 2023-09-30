import logo from "./logo.svg";
import "./App.css";
import react from "react";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sproduct from "./Components/Sproduct";
import Layout from "./Components/Layout";
import Food from "./Components/Food";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        {
          path: "/products",
          loader: async () => {
            return fetch(
              `https://openapi.programming-hero.com/api/phones?search=iphone`
            );
          },
          element: <Products />,
        },
        { path: "/food", element: <Food /> },
        { path: "/about", element: <About /> }
      ],
    },

    {
      path: "/sproduct/:productId",
      loader: async ({ params }) => {
        console.log(params);
        return fetch(
          `https://openapi.programming-hero.com/api/phone/${params.productId}`
        );
      },
      element: (
        <Layout>
          
          <Sproduct />
        </Layout>
      ),
    },
  ]);
  
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
