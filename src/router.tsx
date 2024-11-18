import { createBrowserRouter } from "react-router-dom";
// > pages
import MacOs from "@/pages/MacOs/MacOs";
import Instagram from "@/pages/Instagram/Instagram";
import Home from "@/pages/Instagram/Home/Home";
import Profile from "@/pages/Instagram/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MacOs />,
    children: [
      {
        path: "/instagram",
        element: <Instagram />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

export default router;