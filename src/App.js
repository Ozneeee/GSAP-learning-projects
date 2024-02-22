import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RouterPage from "./screens/RouterPage";
import {
  AnimatedLanding,
  Restaurant,
  VerticalSlider,
  HorizontalSlider,
  MultipleScroll,
  HistoricFrieze,
  SpaceX,
} from "./screens/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterPage />,
  },
  {
    path: "/AnimatedLanding",
    element: <AnimatedLanding />,
  },
  {
    path: "/Restaurant",
    element: <Restaurant />,
  },
  {
    path: "/VerticalSlider",
    element: <VerticalSlider />,
  },
  {
    path: "/HorizontalSlider",
    element: <HorizontalSlider />,
  },
  {
    path: "/MultipleScroll",
    element: <MultipleScroll />,
  },
  {
    path: "/HistoricFrieze",
    element: <HistoricFrieze />,
  },
  {
    path: "/SpaceX",
    element: <SpaceX />,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<RouterPage />} />;
}
