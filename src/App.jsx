import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
