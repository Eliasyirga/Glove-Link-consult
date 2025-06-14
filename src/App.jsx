import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";

// Optional: placeholder for future routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
