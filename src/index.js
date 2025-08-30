import * as React from "react";
import AzkarLayout from "./Azkar/AzkarLayout";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import AllHome from "./Home/AllHome";
import AllQuranpage from "./Quran/AllQuranpage";
import AllAzkar from "./Azkar/AllAzkar";
import AllMorning from "./Azkar/AllMorning";
import Allevening from "./Azkar/Allevening";
import Allvariety from "./Azkar/Allvariety";
import Alltasbeeh from "./Azkar/Alltasbeeh";
import Allcounter from "./Azkar/Allcounter";
import Allprayer from "./Prayer/Allprayer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AllHome />,
  },
  {
    path: "quran",
    element: <AllQuranpage />,
  },

  {
    path: "prayer",
    element: <Allprayer/>,
  },

  {
    path: "azkar",
    element: <AzkarLayout />, 
    children: [
      {
        index: true,
        element: <AllAzkar />,
      },
      {
        path: "morning",
        element: <AllMorning />,
      },
      {
        path: "evening",
        element: <Allevening />,
      },
      {
        path: "general",
        element: <Allvariety />,
      },
      {
        path: "tasbeeh",
        element: <Alltasbeeh />,
      },
    ],
  },

 

  {
    path: "counter",
    element: <Allcounter />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
