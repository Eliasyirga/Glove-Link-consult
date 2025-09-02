import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingPage from "./components/LoadingPage"; // Your loading spinner page

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/Home"));

// Define router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default function App() {
  return (
    // Suspense will show LoadingPage while lazy components load
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
