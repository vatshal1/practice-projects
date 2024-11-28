import React from "react";
import { createRoot } from "react-dom/client";
import App from "./router_app";
import Error from "./router_error";
import Home from "./router_home";
import Contact from "./router_contact";
import CountryDetail from "./router_countryDetail";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// prettier-ignore
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      { 
        path: "/",
        element: <Home /> 
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path:"/:country",
        element: <CountryDetail/>
      }
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
