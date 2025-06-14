import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

// Optional: placeholder for future routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
