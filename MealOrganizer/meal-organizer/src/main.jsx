import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Recipes from "./pages/Recipes.jsx";
import Planner from "./pages/Planner.jsx";
// import 'bootstrap/dist/css/bootstrap.css'
import "./styles/index.scss"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShoppingList from "./pages/ShoppingList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
    {
    path: "recipes",
    element: <Recipes/>,
  },
    {
    path: "planner",
    element: <Planner/>,
  },
    {
    path: "shop",
    element: <ShoppingList/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
     {/*<RouterProvider router={router} />*/}
  </React.StrictMode>,
)
