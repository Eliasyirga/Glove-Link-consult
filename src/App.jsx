import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

// Define router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

// Wrap the RouterProvider with HelmetProvider
export default function App() {
  return <RouterProvider router={router} />;
}
